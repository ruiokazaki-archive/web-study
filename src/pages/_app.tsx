import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/dist/shared/lib/router/router';

import GoogleTagManager from 'components/GoogleTagManager';
import SEO from 'libs/next-seo.config';
import theme from 'theme';
import googleTagManagerId from 'utils/gtm';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // NOTE Componentの型情報が原因でbuildエラーが出たため、例外でanyにすることで対処した
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  const AnyComponent = Component as any;

  return (
    <>
      <DefaultSeo {...SEO} />
      <GoogleTagManager googleTagManagerId={googleTagManagerId} />
      <ChakraProvider resetCSS theme={theme}>
        <AnyComponent {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
