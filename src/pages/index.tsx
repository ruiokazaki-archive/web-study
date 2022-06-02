import { Box, Flex, Heading } from '@chakra-ui/react';

import Card from 'components/ui-parts/Card';
import { getBlogs } from 'libs/apiClient';
import { Blog } from 'types/blog';

import type { NextPage } from 'next';

type Props = {
  blogData: Blog[];
};

const index: NextPage<Props> = ({ blogData }) => {
  // eslint-disable-next-line no-console
  console.log(blogData);

  return (
    <Box width="1000px" mx="auto">
      <Heading as="h1">ブログ一覧</Heading>
      <Flex flexWrap="wrap" justifyContent="space-between" gap="40px">
        {blogData.map((blog) => (
          <Card key={blog.id} blogData={blog} />
        ))}
      </Flex>
    </Box>
  );
};

export const getStaticProps = async () => {
  const microCMSBlogs = await getBlogs({ limit: 1000 });

  return {
    props: {
      blogData: microCMSBlogs.contents,
    },
  };
};

export default index;
