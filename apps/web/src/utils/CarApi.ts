import axios from 'axios';

const apiCar = axios.create({
  baseURL: 'https://api.api-ninjas.com',
});

export const createCarImage = (car: any, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('paintdescription', 'radiant-green');
  url.searchParams.append('modelFamily', model);
  url.searchParams.append('make', make);
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};

export default apiCar;
