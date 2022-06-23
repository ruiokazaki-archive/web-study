import { Box, Flex, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { VFC } from 'react';

import LogoData from 'assets/HeadLogo';

const ToAuthorBnr: VFC = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    h="280px"
    color="#fff"
    fontSize="32px"
    fontWeight="bold"
    bgImage={{
      sm: 'url("https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/c683f58250c14159b4002c3f0cd7fad6/author_bnr_bg_01.png"), url("https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/5d78ef47df1c4b05881f187903acfd01/author_bnr_bg_02.png")',
      md: 'url("https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/c683f58250c14159b4002c3f0cd7fad6/author_bnr_bg_01.png"), url("https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/5d78ef47df1c4b05881f187903acfd01/author_bnr_bg_02.png")',
    }}
    bgColor="#C0EFFF"
    bgSize={{ base: '0,0', sm: 'auto 55%, auto 55%', md: 'auto 70%, auto 70%' }}
    bgPosition="left 4% bottom 8px, right 4% bottom 8px"
    bgRepeat="no-repeat"
  >
    <Box as={LogoData} w={{ base: '64px', sm: '104px', md: '104px' }} />
    <Heading as="h2" w="80%" maxW="480px" m="8px 0 32px">
      <Box
        as="img"
        src="https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/71bfe986b0724cff830e0daab02d28db/author_bnr_logo.png"
        alt="ゆかいな仲間たち"
      />
    </Heading>
    <NextLink href="/author">
      <Flex
        as="a"
        cursor="pointer"
        justifyContent="center"
        alignItems="center"
        w="50vw"
        maxW="360px"
        h={{ base: '48px', sm: '56px', md: '56px' }}
        color="#0E3772"
        bg="#fff"
        border="2px solid #0E3772"
        fontSize={{ base: '16px', sm: '20px', md: '20px' }}
        p="0 0 0 16px"
        borderRadius="9999px"
        position="relative"
        transition="0.2s background, 0.2s color"
        _hover={{
          bg: '#0E3772',
          color: '#fff',
        }}
        sx={{
          '&::before': {
            content: "''",
            display: 'flex',
            width: '80px',
            height: '80px',
            backgroundImage:
              "url('https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/dd5f570a4bc1478fa12b21a0e16d1667/author_bnr_btn.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            inset: 'auto auto -1px 16px',
          },
        }}
      >
        メンバー紹介へ
      </Flex>
    </NextLink>
  </Flex>
);
export default ToAuthorBnr;
