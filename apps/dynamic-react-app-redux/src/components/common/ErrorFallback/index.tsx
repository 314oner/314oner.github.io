import React from 'react';

export const errorFallback = ({
  error,
  resetErrorBoundary,
}): React.ReactNode => {
  return (
    <div role="alert">
      <p>Ошибка:</p>
      <pre>{error.message}</pre>
      <button
        className="flex mb-5 w-full justify-center rounded-md !bg-indigo-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        onClick={resetErrorBoundary}
      >
        Попробовать еще
      </button>
    </div>
  );
};

export default errorFallback;
