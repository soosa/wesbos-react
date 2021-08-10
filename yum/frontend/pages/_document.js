import Document, { Html, Head, NextScript, Main } from 'next/document';

export class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* <Head></Head> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
