import { Input } from '@314oner_npm/universal-components-library';
import Layout from '@theme/Layout';
import React from 'react';

export default function InputDocs() {
  return (
    <Layout title="Input" description="Input component">
      <div className="flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl">
        <div className="flex flex-col justify-center flex-initial px-px">
          <Input />
        </div>
      </div>
    </Layout>
  );
}
