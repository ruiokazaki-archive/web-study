import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { VFC } from 'react';

import LogoData from 'assets/HeadLogo';

const Logo: VFC = () => (
  <Box as="h1" h="fit-content">
    <NextLink href="/">
      <Box
        as={LogoData}
        cursor="pointer"
        w={{ base: '64px', sm: '126px', md: '126px' }}
      />
    </NextLink>
  </Box>
);
export default Logo;
