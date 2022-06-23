import { Box, Flex, Text } from '@chakra-ui/react';
import { VFC } from 'react';

import Card from 'components/ui-parts/Card';
import { Blog } from 'types/blog';

type Props = {
  blogData: Blog[];
};

const ArticleRcm: VFC<Props> = ({ blogData }) => (
  <Box w="80vw" m="0 auto">
    <Text fontWeight="bold" m="0 0 24px">
      こちらの記事もおすすめ
    </Text>
    <Flex justifyContent="space-between" flexWrap="wrap" gap="32px 0">
      {blogData.map((item, i) => (
        <Card blogData={item} key={item.title} />
      ))}
    </Flex>
  </Box>
);

export default ArticleRcm;
