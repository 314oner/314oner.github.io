import { RootState } from '@/store';
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
  updateUserFailure,
  updateUserSuccess,
  uploadUserStart,
} from '@/store/user/userSlice';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function ProfilePage() {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector(
    (state: RootState) => state.user,
  );
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();
  const handleUserDelete = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (e: unknown) {
      if (
        typeof e === 'object' &&
        e &&
        'message' in e &&
        typeof e.message === 'string'
      )
        dispatch(deleteUserFailure(e.message));
    }
  };
  const handleChange = (e: { target: { id: any; value: any } }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      dispatch(uploadUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json ' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (e: unknown) {
      if (
        typeof e === 'object' &&
        e &&
        'message' in e &&
        typeof e.message === 'string'
      )
        dispatch(updateUserFailure(e.message));
    }
  };
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
    } catch (e) {
      if (
        typeof e === 'object' &&
        e &&
        'message' in e &&
        typeof e.message === 'string'
      )
        dispatch(signOutUserFailure(e.message));
    }
  };
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7"></h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input ref={fileRef} type="file" hidden accept="image/*"></input>
        <img
          //@ts-ignore
          onClick={() => fileRef.current.click()}
          src={currentUser?.avatar}
          className="self-center mt-2 cursor-pointer"
        ></img>
        <input
          type="text"
          placeholder="Имя пользователя"
          defaultValue={currentUser?.username}
          onChange={handleChange}
          id="username"
          className="p-3 border rounded-lg"
        ></input>
        <input
          type="text"
          placeholder="Электронаая почта"
          defaultValue={currentUser?.email}
          onChange={handleChange}
          id="email"
          className="p-3 border rounded-lg"
        ></input>
        <input
          type="text"
          placeholder="Пароль"
          onChange={handleChange}
          id="password"
          className="p-3 border rounded-lg"
        ></input>
        <button
          disabled={loading}
          className="p-3 text-white uppercase rounded-lg bg-slate-500 hover:opacity-95"
        >
          {loading ? 'Загрузка...' : 'Обновить данные'}
        </button>
        <Link
          className="p-3 text-center text-white uppercase bg-green-700 rounded-lg hover:opacity"
          to="/create-listing"
        ></Link>
      </form>
      <div className="flex justify-between mt-5">
        <span
          onClick={handleUserDelete}
          className="text-red-700 cursor-pointer"
        >
          Удалить аккаунт
        </span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">
          Выйти
        </span>
      </div>
      <p className="mt-5 text-red-700">{error ? error : ''}</p>
      <p className="mt-5 text-green-700">{updateSuccess ? 'Успешно' : ''}</p>
    </div>
  );
}
