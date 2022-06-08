export const fetchProducts = () => {
  return fetch(`http://localhost:8081/v1/products`).then((response) =>
    response.json()
  );
};
