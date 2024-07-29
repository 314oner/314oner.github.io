import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'dynamic-react-app.firebaseapp.com',
  projectId: 'dynamic-react-app',
  storageBucket: 'dynamic-react-app.appspot.com',
  messagingSenderId: '431837727247',
  appId: '1:431837727247:web:46a8b5ad1a88578ac4717a',
};

export const app = initializeApp(firebaseConfig);
