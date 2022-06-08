import { Box, Flex, Heading } from '@chakra-ui/react';

import ArticleTweetBtn from 'components/ui-elements/ArticleTweetBtn';
import ToAuthorBnr from 'components/ui-elements/ToAuthorBnr';
import Card from 'components/ui-parts/Card';
import { getBlogs } from 'libs/apiClient';
import { Blog } from 'types/blog';

import type { NextPage } from 'next';

type Props = {
  blogData: Blog[];
};

const index: NextPage<Props> = ({ blogData }) => (
  <Box mx="auto">
    <Heading as="h1">ブログ一覧</Heading>
    <Flex
      flexWrap="wrap"
      justifyContent="space-between"
      gap="40px"
      width="1000px"
      m="0 auto"
    >
      {blogData.map((blog) => (
        <Card key={blog.id} blogData={blog} />
      ))}
    </Flex>
    <ToAuthorBnr />
    <ArticleTweetBtn link="/" />
  </Box>
);

export const getStaticProps = async () => {
  const microCMSBlogs = await getBlogs({ limit: 1000 });

  return {
    props: {
      blogData: microCMSBlogs.contents,
    },
  };
};

export default index;
