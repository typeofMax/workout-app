//@Libs
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
//@Components
import AppProvider from './AppProvider';

const queryClient = new QueryClient();

const ReactQueryProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
