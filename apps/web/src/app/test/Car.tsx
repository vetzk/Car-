'use client';
import { useLoader } from '@react-three/fiber';
import * as React from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ICarProps {}

const Car: React.FunctionComponent<ICarProps> = (props) => {
  const gltf = useLoader(GLTFLoader, '/models/car/scene.gltf');
  React.useEffect(() => {
    gltf.scene.scale.set(0.005, 0.005, 0.005);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);
  return <primitive object={gltf.scene} />;
};

export default Car;
