import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta
            name='description'
            content='A site for my programming portofolio'
          />
          <meta charSet='utf-8' />
          <meta name='robots' content='noindex, nofollow' />
          <meta name='viewport' content='width=device-width' />
          <link
            rel='stylesheet'
            href='https://unpkg.com/nprogress@0.2.0/nprogress.css'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <style global jsx>
          {`
            body {
              font-family: 'Roboto', sans-serif;
            }
          `}
        </style>
      </html>
    );
  }
}
