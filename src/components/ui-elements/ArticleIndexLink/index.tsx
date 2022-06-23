import { Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { VFC } from 'react';

import IndexIcon from 'assets/IndexIcon';

const ArticleIndexLink: VFC = () => (
  <NextLink href="/" passHref>
    <Flex
      as="a"
      href="/"
      gap="8px"
      w="fit-content"
      m="0 auto"
      opacity="1"
      transition="opacity 0.2s"
      _hover={{
        opacity: '0.6',
      }}
    >
      <IndexIcon />
      <Text fontWeight="bold">トップページへ戻る</Text>
    </Flex>
  </NextLink>
);

export default ArticleIndexLink;
