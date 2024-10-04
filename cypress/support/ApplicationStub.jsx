import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from '../../apps/dynamic-react-app-redux/src/App';
import ThemeProvider from '../../apps/dynamic-react-app-redux/src/components/ThemeProvider';
import '../../apps/dynamic-react-app-redux/src/cypress.css';
import store, {
  persistor,
} from '../../apps/dynamic-react-app-redux/src/store/index';
import { AuthProvider } from '../../apps/dynamic-react-app-redux/src/utils/auth-util';
export const ApplicationStub = ({ children, loader }) => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: children },
        {
          path: '/:category',
          element: children,
          loader,
        },
      ],
    },
    ,
  ]);

  return (
    <>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <ThemeProvider>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </ThemeProvider>
        </Provider>
      </PersistGate>
    </>
  );
};
