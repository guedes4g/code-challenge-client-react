import qs from 'qs';

export const fetchTemperatures = ({ ids }) => {
  const queryString = qs.stringify({ ids }, { arrayFormat: 'brackets' });
  return fetch(
    `http://localhost:8081/v1/sensors/temperature?${queryString}`
  ).then((response) => response.json());
};
