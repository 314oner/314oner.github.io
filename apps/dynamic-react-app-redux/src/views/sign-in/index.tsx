import errorFallback from '@/components/common/ErrorFallback';
import OAuth from '@/components/OAuth';
import { useAppDispatch } from '@/store';
import { authorizeUser, loginArgs } from '@/store/reducers/user/actionCreators';
import {
  signInUserFailure,
  signInUserStart,
  signInUserSuccess,
} from '@/store/reducers/user/userSlice';
import { useAuth } from '@/utils/auth-util';
import { decode } from 'js-base64';
import { MouseEvent, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const loginData = {
  email: '314oner@smtp.com',
  password: 'password',
};

export default function SignIn() {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const { search } = useLocation();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState(loginData.email);
  const [password, setPassword] = useState(loginData.password);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const loginAnonymous = (e: MouseEvent) => {
    e.preventDefault();

    if (email === loginData.email && password === loginData.password) {
      loginUser();
      const queryParameters = new URLSearchParams(search);
      const redirect = queryParameters.get('redirect');
      navigate(redirect ? decode(redirect) : '/');
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const args: loginArgs = {
      type: 'login',
      email: formData.email,
      password: formData.password,
    };
    try {
      dispatch(signInUserStart());
      const res = await dispatch(authorizeUser(args));
      console.log(res);
      if (res.meta.requestStatus === 'rejected') {
        dispatch(signInUserFailure(res.meta.requestStatus));
        return;
      }
      dispatch(signInUserSuccess(res));
      navigate('/');
    } catch (e: unknown) {
      if (
        typeof e === 'object' &&
        e &&
        'message' in e &&
        typeof e.message === 'string'
      )
        dispatch(signInUserFailure(e.message));
    }
  };
  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center">
          Авторизоваться
        </h1>
      </div>
      <div className="max-w-lg p-3 mx-auto mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          action="#"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            placeholder="Электронная почта"
            className="p-3 border rounded-lg"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Пароль"
            className="p-3 border rounded-lg"
            id="password"
            onChange={handleChange}
          />
          <button
            type="submit"
            id="btnSignInAnon"
            className="flex mb-5 w-full justify-center rounded-md !bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={loginAnonymous}
          >
            Войти анонимно
          </button>
          <button
            type="submit"
            id="btnSignInNest"
            className="flex mb-5 w-full justify-center rounded-md !bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Войти
          </button>
        </form>
        <ErrorBoundary FallbackComponent={errorFallback}>
          <OAuth />
        </ErrorBoundary>

        <div className="flex items-center justify-center gap-2 mt-5">
          <p>Создать учетную запись?</p>
          <Link to={'/sign-up'}>
            <span className="text-blue-700">Зарегистрироваться</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
