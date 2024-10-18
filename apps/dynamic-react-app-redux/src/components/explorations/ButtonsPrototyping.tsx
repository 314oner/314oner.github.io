import { DefaultLongButton } from '@314oner_npm/universal-components-library';
import { Button } from 'flowbite-react';

export default function ButtonsPrototyping() {
  return (
    <div className="flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl">
      <div className="flex flex-col justify-center flex-1 px-px">
        <h2 className="text-2xl">Want to learn more about JavaScript?</h2>
        <p className="my-2 text-gray-500">Thirdparty button</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-bl-none rounded-tl-xl"
        >
          <a
            href="https://flowbite-react.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            N JavaScript Projects
          </a>
        </Button>
      </div>
      <div className="flex flex-col justify-center flex-1 px-px">
        <h2 className="text-2xl">Yes yes yes</h2>
        <p className="my-2 text-gray-500">My custom button</p>
        <DefaultLongButton
          onClick={() => {
            console.log('DefaultLongButton clicked');
          }}
        >
          <a
            href="https://github.com/314oner/universal-components-library"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </DefaultLongButton>
      </div>
    </div>
  );
}
