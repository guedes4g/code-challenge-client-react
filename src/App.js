import { QueryClient, QueryClientProvider } from 'react-query';
import { ProductsTable } from './components/products/ProductsTable';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ProductsTable />
      </QueryClientProvider>
    </div>
  );
}

export default App;
