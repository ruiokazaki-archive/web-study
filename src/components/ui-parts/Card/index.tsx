import { Box, Flex, Heading, Img } from '@chakra-ui/react';
import NextLink from 'next/link';
import { VFC } from 'react';

import CardAuthor from 'components/ui-elements/CardAuthor';
import CardDate from 'components/ui-elements/CardDate';
import { Blog } from 'types/blog';

type Props = {
  blogData: Pick<Blog, 'id' | 'title' | 'author' | 'thumbnail' | 'createdAt'>;
};

const Card: VFC<Props> = ({ blogData }) => (
  <NextLink href={`/blog/${blogData.id}`} passHref>
    <Box
      as="a"
      bg="white"
      w={{ base: '100%', sm: '48%', md: '30%' }}
      height="fit-content"
      textStyle="card"
      borderRadius="4px"
      overflow="hidden"
      boxShadow="0px 2px 6px rgba(0, 0, 0, 0.25)"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{
        opacity: 0.7,
      }}
    >
      <Img
        src={blogData.thumbnail.url}
        alt={`${blogData.title}のサムネイル`}
        objectFit="cover"
        sx={{
          aspectRatio: '541 / 272.11',
        }}
      />
      <Flex
        justifyContent="space-between"
        flexDirection="column"
        gap="16px"
        p="16px"
      >
        <CardDate>{blogData.createdAt}</CardDate>
        <Heading as="h3" height="56px">
          {blogData.title}
        </Heading>
        <CardAuthor author={blogData.author[0]} />
      </Flex>
    </Box>
  </NextLink>
);
export default Card;
