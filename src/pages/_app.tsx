import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import theme from 'theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider resetCSS theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
