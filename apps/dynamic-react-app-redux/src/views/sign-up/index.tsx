import { useAppDispatch } from '@/store';
import { authArgs, registerUser } from '@/store/reducers/user/actionCreators';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const args: authArgs = {
      type: 'register',
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    try {
      setLoading(true);
      const res = await dispatch(registerUser(args));
      console.log(res);
      if (res.meta.requestStatus === 'rejected') {
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (e: any) {
      if (
        typeof e === 'object' &&
        e &&
        'message' in e &&
        typeof e.message === 'string'
      )
        setError(e.message);
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center">
          Зарегистрироваться
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
            type="text"
            placeholder="Имя пользователя"
            className="p-3 border rounded-lg"
            id="username"
            onChange={handleChange}
          />
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
            disabled={loading}
            className="flex mb-5 w-full justify-center rounded-md !bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading ? 'Загрузка...' : 'Зарегистрироваться'}
          </button>
        </form>
      </div>
      <div className="flex gap-2 mt-5">
        <p>У вас есть учетная запись?</p>
        <Link to={'/sign-in'}>
          <span className="text-blue-700">Войти</span>
        </Link>
      </div>
      {error && <p className="mt-5 text-red-500">{error}</p>}
    </div>
  );
}
