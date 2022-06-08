import React from 'react';

export const ProductsRow = (props) => {
  const { item } = props;
  return (
    <tr>
      <td width={150}>{item.name}</td>
      <td width={150}>{item.temperature ?? 'loading...'}</td>
      <td width={150}>{item.temperatureMessage}</td>
    </tr>
  );
};
