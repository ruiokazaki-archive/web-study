import { Box, Flex, Heading, Img } from '@chakra-ui/react';
import React, { VFC } from 'react';

import CardAuthor from 'components/ui-elements/CardAuthor';
import CardDate from 'components/ui-elements/CardDate';
import { Blog } from 'types/blog';

type Props = {
  blogData: Pick<Blog, 'title' | 'thumbnail' | 'createdAt'>;
};

const Article: VFC<Props> = ({ blogData }) => (
  <Box
    bg="white"
    w="47.5%"
    height="fit-content"
    textStyle="article"
    borderRadius="8px"
    overflow="hidden"
  >
    <Img
      src={blogData.thumbnail.url}
      objectFit="cover"
      sx={{
        aspectRatio: '541 / 272.11',
      }}
    />
    <Flex
      justifyContent="space-between"
      flexDirection="column"
      gap="24px"
      py="24px"
      px="16px"
    >
      <CardDate>{blogData.createdAt}</CardDate>
      <Heading as="h2" height="72px">
        {blogData.title}
      </Heading>
      <CardAuthor author="kinoshita" />
    </Flex>
  </Box>
);
export default Article;
