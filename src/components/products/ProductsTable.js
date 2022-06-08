import React from 'react';
import { ProductsRow } from './ProductsRow';
import { useProductsSensor } from './useProductsSensor';

export const ProductsTable = () => {
  const { items } = useProductsSensor();
  return (
    <>
      <h2>Beers</h2>
      <table>
        <thead>
          <tr>
            <th align="left">Product</th>
            <th align="left">Temperature</th>
            <th align="left">Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map((itemKey) => (
            <ProductsRow key={itemKey} item={items[itemKey]} />
          ))}
        </tbody>
      </table>
    </>
  );
};
