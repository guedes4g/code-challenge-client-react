import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useProductsSensor } from '../useProductsSensor';
import * as ProductService from '../../../services/products';
import * as SensorService from '../../../services/sensors';

// TODO: move to another file
const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useProductsSensor', () => {
  it('should corretly map results to status', async () => {
    // Given
    jest.spyOn(ProductService, 'fetchProducts').mockResolvedValue([
      {
        id: '1',
        name: 'Pilsner1',
        minimumTemperature: 4,
        maximumTemperature: 6,
      },
      {
        id: '2',
        name: 'Pilsner2',
        minimumTemperature: 4,
        maximumTemperature: 6,
      },
      {
        id: '3',
        name: 'Pilsner3',
        minimumTemperature: 4,
        maximumTemperature: 6,
      },
      {
        id: '4',
        name: 'Pilsner4',
        minimumTemperature: 4,
        maximumTemperature: 6,
      },
    ]);
    jest.spyOn(SensorService, 'fetchTemperatures').mockResolvedValue([
      { id: '1', temperature: 3 },
      { id: '2', temperature: 4 },
      { id: '3', temperature: 6 },
      { id: '4', temperature: 7 },
    ]);
    // When
    const { result, waitFor } = renderHook(() => useProductsSensor(), {
      wrapper,
    });
    await waitFor(() =>
      expect(
        result.current.isLoadingProducts || result.current.isLoadingTemperature
      ).toBeFalsy()
    );
    // Then
    expect(result.current.items).toStrictEqual({
      1: {
        id: '1',
        maximumTemperature: 6,
        minimumTemperature: 4,
        name: 'Pilsner1',
        temperature: 3,
        temperatureMessage: 'too low',
      },
      2: {
        id: '2',
        maximumTemperature: 6,
        minimumTemperature: 4,
        name: 'Pilsner2',
        temperature: 4,
        temperatureMessage: 'all good',
      },
      3: {
        id: '3',
        maximumTemperature: 6,
        minimumTemperature: 4,
        name: 'Pilsner3',
        temperature: 6,
        temperatureMessage: 'all good',
      },
      4: {
        id: '4',
        maximumTemperature: 6,
        minimumTemperature: 4,
        name: 'Pilsner4',
        temperature: 7,
        temperatureMessage: 'too high',
      },
    });
  });
});
