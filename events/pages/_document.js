import Document, { Html, Head, Main, NextScript } from "next/document";

export class MyDocument extends Component {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlays"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
