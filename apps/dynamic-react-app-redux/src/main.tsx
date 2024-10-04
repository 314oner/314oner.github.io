import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import PrivateRoute from './components/PrivateRoute';
import ThemeProvider from './components/ThemeProvider';
import lazyLoad from './components/common/LazyLoad';
import './index.css';
import store, { persistor } from './store/index';
import { AuthProvider } from './utils/auth-util';
import Home from './views/home';
const About = lazyLoad(React.lazy(() => import('./views/about')));
const Dashboard = lazyLoad(React.lazy(() => import('./views/dashboard')));
const Projects = lazyLoad(React.lazy(() => import('./views/projects')));
const SignIn = lazyLoad(React.lazy(() => import('./views/sign-in')));
const SignUp = lazyLoad(React.lazy(() => import('./views/sign-up')));
const Search = lazyLoad(React.lazy(() => import('./views/search')));
const NotFound = lazyLoad(React.lazy(() => import('./views/404')));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={About} />
      <Route path="/sign-in" element={SignIn} />
      <Route path="/sign-up" element={SignUp} />
      <Route path="/search" element={Search} />
      <Route path="/projects" element={Projects} />
      <Route element={<PrivateRoute loginUrl={'/sign-in'} />}>
        <Route path="/dashboard" element={Dashboard} />
      </Route>
      <Route path={'*'} element={NotFound} />
    </Route>,
  ),
  {},
);
createRoot(document.getElementById('root') as HTMLElement).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </PersistGate>,
);
