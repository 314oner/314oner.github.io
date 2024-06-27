import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  //@ts-ignore
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: '314oner.firebaseapp.com',
  projectId: '314oner',
  storageBucket: '314oner.appspot.com',
  messagingSenderId: undefined,
  appId: undefined,
};

export const app = initializeApp(firebaseConfig);
