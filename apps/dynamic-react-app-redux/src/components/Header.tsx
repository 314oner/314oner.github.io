import { RootState } from '@/store';
import { toggleTheme } from '@/store/theme/themeSlice';
import { useAuth } from '@/utils/auth-util';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import {
  HiMiniArrowLeftOnRectangle,
  HiMiniArrowRightOnRectangle,
} from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);
  const { isAuthenticated, logoutUser } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center text-sm font-semibold whitespace-nowrap sm:text-xl dark:text-white"
      >
        <span className="px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          314oner
        </span>
        github.io
      </Link>
      <form role="search" onSubmit={handleSubmit}>
        <TextInput
          title="Поиск по сайту"
          aria-label="Введите свой поисковый запрос"
          className="hidden lg:inline"
          type="search"
          id="search"
          name="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm || ''}
          placeholder="Поле ввода для поискового запроса"
          required
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-12 h-10 lg:hidden"
          color="gray"
          pill
        >
          <AiOutlineSearch title="Изображение для поля ввода" />
        </Button>
      </form>
      <div className="flex gap-2 md:order-2">
        <Button
          className="hidden w-12 h-10 sm:inline"
          aria-label="Переключить цветовую тему"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        <button
          type="button"
          className="relative p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          onClick={() =>
            isAuthenticated ? logoutUser() : navigate('/sign-in')
          }
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          {isAuthenticated && (
            <HiMiniArrowLeftOnRectangle
              className="w-6 h-6"
              aria-hidden="true"
            />
          )}
          {!isAuthenticated && (
            <HiMiniArrowRightOnRectangle
              className="w-6 h-6"
              aria-hidden="true"
            />
          )}
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to="/">Главная</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to="/about">Обо мне</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to="/projects">Проекты</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/dashboard'} as={'div'}>
          <Link to="/dashboard">Личный кабинет</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
