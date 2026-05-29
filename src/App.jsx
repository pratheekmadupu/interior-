import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { UIProvider } from './context/UIContext';
import { AppRoutes } from './routes';

export function App() {
  return (
    <HelmetProvider>
      <UIProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </UIProvider>
    </HelmetProvider>
  );
}
export default App;
