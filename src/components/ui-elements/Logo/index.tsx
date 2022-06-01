import { Box } from '@chakra-ui/react';
import { VFC } from 'react';

import LogoData from 'assets/HeadLogo';

const Logo: VFC = () => (
  <Box as="h1" h="fit-content">
    <Box as="a" href="/">
      <Box as={LogoData} w={{ base: '64px', sm: '126px', md: '126px' }} />
    </Box>
  </Box>
);
export default Logo;
