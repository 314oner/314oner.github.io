import React from 'react';
import Layout from '@theme/Layout';
import { DefaultButton } from '@314oner_npm/universal-components-library';

export default function DefaultButtonDocs() {
    return (
        <Layout title="DefaultButton" description="DefaultButton component">
            <DefaultButton onClick={function (event: React.MouseEvent<HTMLElement, MouseEvent>): void {
                throw new Error('Function not implemented.');
            }} />
        </Layout>
    );
}