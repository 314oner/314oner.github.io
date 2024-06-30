import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center max-w-6xl gap-6 px-3 mx-auto p-28 ">
        <h1 className="text-3xl font-bold lg:text-6xl">Hello there</h1>
        <form
          className="flex items-center justify-center"
          action="https://flowbite-react.com/"
        >
          <Button
            type="submit"
            gradientDuoTone="purpleToPink"
            className="rounded-bl-none rounded-tl-xl"
          >
            CI test button
          </Button>
        </form>
        <Link
          to="/search"
          className="text-xs font-bold text-wcag-green sm:text-sm hover:underline"
        >
          Посмотреть все сообшения
        </Link>
      </div>
    </div>
  );
}
