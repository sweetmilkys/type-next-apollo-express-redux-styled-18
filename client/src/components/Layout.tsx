import Header from './Header';

import Head from 'next/head';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = 'Client Title' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
