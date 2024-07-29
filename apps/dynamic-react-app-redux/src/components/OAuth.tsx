import { app } from '@/firebase';
import { useAppDispatch } from '@/store';
import { authorizeGoogleUser } from '@/store/user/actionCreators';
import {
  signInUserFailure,
  signInUserStart,
  signInUserSuccess,
} from '@/store/user/userSlice';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const args: any = {
      type: 'loginGoogle',
      username: null,
      email: null,
      googlePhotoUrl: null,
    };
    try {
      console.log(auth);
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle);
      args.username = resultsFromGoogle.user.displayName;
      args.email = resultsFromGoogle.user.email;
      args.googlePhotoUrl = resultsFromGoogle.user.photoURL;
      /*
      const res = await fetch(
        'http://localhost:8081/nestApi/v1/users/auth/google',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: resultsFromGoogle.user.displayName,
            email: resultsFromGoogle.user.email,
            googlePhotoUrl: resultsFromGoogle.user.photoURL,
          }),
        },
      );
      const data = await res.json();
      if (res.ok) {
        dispatch(signInUserSuccess(data));
        navigate('/');
      }
      */
      dispatch(signInUserStart());
      const res = await dispatch(authorizeGoogleUser(args));
      console.log(res);
      if (res.meta.requestStatus === 'rejected') {
        dispatch(signInUserFailure(res.meta.requestStatus));
        return;
      }
      dispatch(signInUserSuccess(res));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      type="submit"
      className="flex mb-5 w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      onClick={handleGoogleClick}
    >
      Войти в Google
    </button>
  );
}
