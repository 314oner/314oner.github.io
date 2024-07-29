import { RootState } from '@/store';
import { toggleTheme } from '@/store/theme/themeSlice';
import { useAuth } from '@/utils/auth-util';
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();

  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);
  const { currentUser } = useSelector((state: RootState) => state.user);

  const { isAuthenticated, logoutUser } = useAuth();
  const navigate = useNavigate();
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
          aria-label="Поиск по сайту"
          className="hidden lg:inline"
          type="search"
          id="search"
          name="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm || ''}
          placeholder="Поиск по сайту"
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
        {!!currentUser || !!isAuthenticated ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="user"
                img={currentUser?.payload?.data?.user?.profile_picture}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">
                @
                {currentUser
                  ? currentUser?.payload?.data?.user?.username
                  : 'Anonymous'}
              </span>
              <span className="block text-sm font-medium truncate">
                {currentUser?.payload?.data?.user?.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Профиль</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logoutUser}>Выйти</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Войти
            </Button>
          </Link>
        )}
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
