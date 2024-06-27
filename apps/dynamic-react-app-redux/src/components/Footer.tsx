import { Footer } from 'flowbite-react';
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid justify-between w-full sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center text-lg font-semibold whitespace-nowrap sm:text-xl dark:text-white"
            >
              <span className="px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                314oner
              </span>
              github.io
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Обо мне" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://314oner.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SSG cайт с документацией
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Следовать" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/314oner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="dynamic-react-application-flux"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 mt-4 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="https://github.com/314oner" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
