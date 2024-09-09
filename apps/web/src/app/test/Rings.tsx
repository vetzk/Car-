import { useFrame } from '@react-three/fiber';
import * as React from 'react';
import {
  BufferGeometry,
  Color,
  Material,
  Mesh,
  MeshStandardMaterial,
} from 'three';

interface IRingsProps {}

const Rings: React.FunctionComponent<IRingsProps> = (props) => {
  const itemsRef = React.useRef<(Mesh<BufferGeometry, Material> | null)[]>([]);
  useFrame((state) => {
    //run everytime a new frame re render
    for (let i = 0; i < itemsRef.current.length; i++) {
      let mesh = itemsRef.current[i];
      if (!mesh) {
        continue;
      }
      let z = (i - 7) * 3.5;
      mesh.position.set(0, 0, -z);

      let dist = Math.abs(z);
      mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

      let colorScale = 1;
      if (dist > 2) {
        colorScale = 1 - (Math.min(dist, 12) - 2) / 10;
      }

      colorScale *= 0.5;

      if (Array.isArray(mesh.material)) {
        // If material is an array
        for (let mat of mesh.material) {
          if (mat instanceof MeshStandardMaterial) {
            mat.emissive = new Color(
              i % 2 === 1 ? 6 : 0.1,
              i % 2 === 1 ? 0.15 : 0.7,
              i % 2 === 1 ? 0.7 : 3,
            ).multiplyScalar(colorScale);
          }
        }
      } else if (mesh.material instanceof MeshStandardMaterial) {
        // If material is a single instance of MeshStandardMaterial
        mesh.material.emissive = new Color(
          i % 2 === 1 ? 6 : 0.1,
          i % 2 === 1 ? 0.15 : 0.7,
          i % 2 === 1 ? 0.7 : 3,
        ).multiplyScalar(colorScale);
      }
    }
  });
  return (
    <>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
        <mesh
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          key={i}
          ref={(el: Mesh<BufferGeometry, Material> | null) => {
            itemsRef.current[i] = el;
          }}
        >
          <torusGeometry args={[3.35, 0.05, 16, 100]} />
          <meshStandardMaterial emissive={[0.5, 0.5, 0.5]} color={[0, 0, 0]} />
        </mesh>
      ))}
    </>
  );
};

export default Rings;
