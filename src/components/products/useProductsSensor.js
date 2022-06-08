import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toMap } from '../../helpers/toMap';
import { fetchProducts } from '../../services/products';
import { fetchTemperatures } from '../../services/sensors';

export const useProductsSensor = () => {
  const [items, setItems] = useState({});

  const { data: products, isLoading: isLoadingProducts } = useQuery(
    'products',
    async () => {
      const response = await fetchProducts();
      return toMap(response, (element) => element.id);
    }
  );

  const { data: temperatures, isLoading: isLoadingTemperature } = useQuery(
    'temperatures',
    () => {
      const ids = Object.keys(products);
      return fetchTemperatures({ ids });
    },
    {
      enabled: Boolean(products && Object.keys(products).length > 0),
      refetchInterval: 5000,
    }
  );

  const getTemperatureMessage = (product) => {
    if (product.temperature !== undefined) {
      if (product.temperature < product.minimumTemperature) {
        return 'too low';
      }
      if (product.temperature > product.maximumTemperature) {
        return 'too high';
      }
      return 'all good';
    }
    return 'missing temperature data';
  };

  const buildItems = () => {
    const newItems =
      temperatures?.reduce((acc, temperature) => {
        if (products[temperature.id] !== undefined) {
          acc[temperature.id] = {
            ...products[temperature.id],
            ...temperature,
          };
          acc[temperature.id].temperatureMessage = getTemperatureMessage(
            acc[temperature.id]
          );
        }
        return acc;
      }, products) ?? products;
    return { ...newItems };
  };

  useEffect(() => {
    setItems(buildItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, temperatures]);

  return { items, isLoadingProducts, isLoadingTemperature };
};
