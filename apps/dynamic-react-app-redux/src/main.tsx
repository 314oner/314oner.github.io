import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import ThemeProvider from './components/ThemeProvider.jsx';
import './index.css';
import store, { persistor } from './store/index.js';
import { AuthProvider } from './utils/auth-util.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </PersistGate>,
);
