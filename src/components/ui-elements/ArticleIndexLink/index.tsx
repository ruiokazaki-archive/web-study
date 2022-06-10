import { Flex, Text } from '@chakra-ui/react';
import { VFC } from 'react';

import IndexIcon from 'assets/IndexIcon';

const ArticleListLink: VFC = () => (
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
);

export default ArticleListLink;
