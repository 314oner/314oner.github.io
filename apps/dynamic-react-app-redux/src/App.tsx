import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';
import lazyLoad from './components/common/LazyLoad';
import Home from './views/home';
const About = lazyLoad(React.lazy(() => import('./views/about')));
const Dashboard = lazyLoad(React.lazy(() => import('./views/dashboard')));
const Projects = lazyLoad(React.lazy(() => import('./views/projects')));
const SignIn = lazyLoad(React.lazy(() => import('./views/sign-in')));
const SignUp = lazyLoad(React.lazy(() => import('./views/sign-up')));
const Search = lazyLoad(React.lazy(() => import('./views/search')));
const NotFound = lazyLoad(React.lazy(() => import('./views/404')));
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
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
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
