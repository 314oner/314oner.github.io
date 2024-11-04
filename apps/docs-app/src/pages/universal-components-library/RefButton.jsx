import { RefButton } from '@314oner_npm/universal-components-library';
import Layout from '@theme/Layout';
import React from 'react';

export default function DefaultButtonDocs() {
  return (
    <Layout title="DefaultButton" description="DefaultButton component">
      <div className="flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl">
        <div className="flex flex-col justify-center flex-1 px-px">
          <RefButton size="medium">
            <a
              href="https://github.com/314oner/universal-components-library"
              target="_blank"
              rel="noopener noreferrer"
            >
              My library
            </a>
          </RefButton>
        </div>
      </div>
    </Layout>
  );
}
