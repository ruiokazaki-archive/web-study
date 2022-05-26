import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import theme from 'theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // NOTE Componentの型情報が原因でbuildエラーが出たため、例外でanyにすることで対処
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  const AnyComponent = Component as any;

  return (
    <ChakraProvider resetCSS theme={theme}>
      <AnyComponent {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
