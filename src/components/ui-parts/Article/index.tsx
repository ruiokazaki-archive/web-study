import { Box, Flex, Heading, Img } from '@chakra-ui/react';
import NextLink from 'next/link';
import { VFC } from 'react';

import CardAuthor from 'components/ui-elements/CardAuthor';
import CardDate from 'components/ui-elements/CardDate';
import { Blog } from 'types/blog';

type Props = {
  blogData: Pick<Blog, 'id' | 'title' | 'author' | 'thumbnail' | 'createdAt'>;
};

const Article: VFC<Props> = ({ blogData }) => (
  <NextLink href={`/blog/${blogData.id}`} passHref>
    <Box
      as="a"
      bg="white"
      w="47.5%"
      height="fit-content"
      textStyle="article"
      borderRadius="8px"
      overflow="hidden"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{
        opacity: 0.7,
      }}
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
        <Heading as="h3" height="72px">
          {blogData.title}
        </Heading>
        <CardAuthor author={blogData.author[0]} />
      </Flex>
    </Box>
  </NextLink>
);
export default Article;
