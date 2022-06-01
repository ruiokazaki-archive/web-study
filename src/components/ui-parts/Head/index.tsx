import { Box, Flex, Spacer } from '@chakra-ui/react';
import { VFC } from 'react';

import HeadLink from 'components/ui-elements/HeadLink';
import HeadSearch from 'components/ui-elements/HeadSearch';
import Logo from 'components/ui-elements/Logo';
import OriginalSpacer from 'components/ui-elements/OriginalSpacer';

const Head: VFC = () => (
  <Flex
    as="header"
    justifyContent={{
      base: 'space-around',
      sm: 'space-between',
      md: 'space-between',
    }}
    flexDirection={{ base: 'column', sm: 'row', md: 'row' }}
    w="90vw"
    maxW="1132px"
    bg="#fff"
    m="0 auto"
    p={{ base: '8px 0', sm: '0', md: '0' }}
    textStyle="nav"
  >
    <Flex
      as="nav"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      height={{ base: '20px', sm: 'auto', md: 'auto' }}
    >
      <Logo />
      <OriginalSpacer size="32px" horizontal />
      <Box
        as="p"
        display={{ base: 'none', sm: 'none', md: 'flex' }}
        alignItems={{ base: 'stretch', sm: 'center', md: 'center' }}
        fontSize="13px"
        sx={{
          '&::before': {
            content: "''",
            display: 'block',
            width: '13px',
            height: '1px',
            background: 'gray',
            margin: '0 10px 0 0',
          },
          '&::after': {
            content: "''",
            display: 'block',
            width: '13px',
            height: '1px',
            background: 'gray',
            margin: '0 0 0 10px',
          },
        }}
      >
        Web制作に関する情報を発信
      </Box>
      <Spacer />
      <HeadLink />
    </Flex>
    <OriginalSpacer size="5vw" horizontal />
    <HeadSearch />
  </Flex>
);
export default Head;
