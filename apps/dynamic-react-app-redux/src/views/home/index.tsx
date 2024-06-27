import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col max-w-6xl gap-6 px-3 mx-auto p-28 ">
        <h1 className="text-3xl font-bold lg:text-6xl">Hello there</h1>
        <Link
          to="/search"
          className="text-xs font-bold text-teal-500 sm:text-sm hover:underline"
        >
          Посмотреть все сообшения
        </Link>
      </div>
    </div>
  );
}
