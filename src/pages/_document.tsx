import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import googleTagManagerId from 'utils/gtm';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <noscript
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              <iframew
                src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframew>
              `,
            }}
          />

          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
