import { abortableFetch } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
// See: https://github.com/apollographql/apollo-client/issues/6765#issuecomment-824621283
import fetch from 'node-fetch';
global.fetch = abortableFetch(fetch).fetch;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>Norticle | 断り方のテンプレート共有サイト</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Norticleは断り方のテンプレート共有サイトです。自分がよく使う断り方を共有したり、自分が使いたい断り方を探すことができます。"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
