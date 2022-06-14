import { Box, Center, Flex } from '@chakra-ui/react';

import Card from 'components/ui-parts/Card';
import CardListTitle from 'components/ui-parts/CardListTitle';
import Layout from 'components/ui-parts/Layout';
import Pagination from 'components/ui-parts/Pagination';
import { getBlogs, getTags } from 'libs/apiClient';
import { Blog } from 'types/blog';
import { MicroCMSList } from 'types/microCMS';
import { Tag } from 'types/tag';

import type { NextPage } from 'next';

type Props = {
  blogData: MicroCMSList<Blog>;
  tags: Tag[];
};

const Index: NextPage<Props> = ({ blogData, tags }) => (
  <Layout tags={tags}>
    <Box as="main" mt="80px" w="90vw" mx="auto" maxW="1300px">
      <CardListTitle title="全ての投稿記事" />
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        gap="40px 0"
        mt="40px"
      >
        {blogData.contents.map((blog) => (
          <Card blogData={blog} key={blog.id} />
        ))}
      </Flex>
      <Center mt="64px">
        <Pagination totalBlogCount={blogData.totalCount} />
      </Center>
    </Box>
  </Layout>
);

export const getStaticProps = async () => {
  const blogData = await getBlogs();
  const microCMSTags = await getTags();

  return {
    props: {
      blogData,
      tags: microCMSTags.contents,
    },
  };
};

export default Index;
