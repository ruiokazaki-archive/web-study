import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/dist/shared/lib/router/router';

import GoogleTagManager from 'components/GoogleTagManager';
import theme from 'theme';
import googleTagManagerId from 'utils/gtm';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // NOTE Componentの型情報が原因でbuildエラーが出たため、例外でanyにすることで対処した
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  const AnyComponent = Component as any;

  return (
    <>
      <GoogleTagManager googleTagManagerId={googleTagManagerId} />
      <ChakraProvider resetCSS theme={theme}>
        <AnyComponent {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
