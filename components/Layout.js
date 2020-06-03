import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => {
  return (
    <div className='root'>
      <Head>
        <title>Next Porto</title>
      </Head>
      <header>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
        <Link href='/about?username=yomaswn' as='/about'>
          <a>About</a>
        </Link>
        <Link href='/hireme'>
          <a>Hire Me</a>
        </Link>
      </header>
      <h1>{title}</h1>
      {children}
      <footer>Copyright &copy; {new Date().getFullYear()}</footer>
      <style>
        {`
          .root {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          header {
            display: flex;
            justify-content: space-around;
            width: 100%;
            padding: 1em;
            font-size: 1.2rem; 
            background: indigo;
          }
          header a {
            color: darkgrey;
            text-decoration: none;
          }
          header a:hover {
            color: lightgrey;
            font-weight: bold;
          }
          footer {
            padding: 1em;
          }
        `}
      </style>
      <style global jsx>
        {`
          body {
            background: #f0f0f0;
            font-size: 110%;
            margin: 0;
          }
        `}
      </style>
      <style>
        {`
        #nprogress .bar {
          background: cornflowerblue !important;
        }
        `}
      </style>
    </div>
  );
};

export default Layout;
