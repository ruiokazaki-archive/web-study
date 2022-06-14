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
  currentPage: string;
  tags: Tag[];
};

const Index: NextPage<Props> = ({ blogData, currentPage, tags }) => (
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
      <Center my="64px">
        <Pagination
          totalBlogCount={blogData.totalCount}
          currentPageNumber={Number(currentPage)}
        />
      </Center>
    </Box>
  </Layout>
);

export const getStaticPaths = async () => {
  const microCMSBlogs = await getBlogs();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const ary = [...new Array(Math.ceil(microCMSBlogs.totalCount / 12))].map(
    (_, i) => i + 1,
  );

  const paths = ary.map((i) => ({
    params: { id: i.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const blogData = await getBlogs({
    pageNumber: Number(params.id),
  });

  const microCMSTags = await getTags();

  return {
    props: {
      blogData,
      currentPage: params.id,
      tags: microCMSTags.contents,
    },
  };
};

export default Index;
