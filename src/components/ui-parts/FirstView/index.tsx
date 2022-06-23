import { Box, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { VFC } from 'react';

import LogoData from 'assets/HeadLogo';
import FvAuthor from 'components/ui-elements/FvAuthor';
import FvSPAuthor from 'components/ui-elements/FvSPAuthor';
import OriginalSpacer from 'components/ui-elements/OriginalSpacer';

const FirstView: VFC = () => (
  <Flex
    w="100%"
    h={{ base: 'auto', sm: '60vh', md: '70vh' }}
    bg="#D2E9FF"
    position="relative"
    sx={{
      '&::after': {
        content: '""',
        display: {
          base: 'none',
          sm: 'block',
          md: 'block',
        },
        width: '100%',
        height: '120px',
        background:
          'url("https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/b77d23c28d6b495284131180ba732de8/FvBase.png?width=2000")',
        backgroundSize: 'auto 120px',
        backgroundRepeat: 'repeat no-repeat',
        backgroundPosition: 'center center',
        position: 'absolute',
        inset: 'auto auto -54px',
      },
    }}
  >
    <Flex
      flexDirection="column"
      justifyContent="flex-end"
      p={{ base: '40px 0', sm: '0', md: '0' }}
      position="relative"
      textStyle="bodySize"
    >
      <Box
        width="fit-content"
        position={{ base: 'relative', sm: 'absolute', md: 'absolute' }}
        inset={{ base: 'auto', sm: '32px auto 0 0', md: '32px auto 0 0' }}
        textStyle="bodySize"
      >
        <Text
          color="#0E3772"
          fontSize="14px"
          fontWeight="bold"
          mb="8px"
          textAlign="center"
        >
          Webを学ぶどうぶつたちの勉強ブログ！
        </Text>
        <NextLink href="/">
          <Box
            as={LogoData}
            cursor="pointer"
            w={{ base: '100%', sm: '200px', md: '264px' }}
            maxW={{ base: '320px', sm: 'auto', md: 'auto' }}
            m={{ base: '0 auto', sm: '0', md: '0' }}
          />
        </NextLink>
        <OriginalSpacer size="32px" footContents />
      </Box>
      <FvAuthor />
      <FvSPAuthor />
    </Flex>
  </Flex>
);
export default FirstView;
