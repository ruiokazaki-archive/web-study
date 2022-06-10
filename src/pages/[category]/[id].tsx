import { Box, Center, Flex } from '@chakra-ui/react';

import Card from 'components/ui-parts/Card';
import CardListTitle from 'components/ui-parts/CardListTitle';
import Head from 'components/ui-parts/Head';
import Pagination from 'components/ui-parts/Pagination';
import { getBlogs } from 'libs/apiClient';
import { Blog, Category } from 'types/blog';
import { MicroCMSList } from 'types/microCMS';

import type { NextPage } from 'next';

type Props = {
  blogData: MicroCMSList<Blog>;
  category: Category;
  currentPage: string;
};

const categoryCorrespondenceTable: { [K in Category]: string } = {
  column: 'コラム',
  engineer: 'エンジニア',
  design: 'デザイン',
};

const Index: NextPage<Props> = ({ blogData, category, currentPage }) => (
  <>
    <Head />
    <Box as="main" mt="80px" w="90vw" mx="auto" maxW="1300px">
      <CardListTitle title={categoryCorrespondenceTable[category]} />
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
  </>
);

export const getStaticPaths = async () => {
  const categories = ['design', 'engineer', 'column'];

  const microCMSBlogs = await getBlogs({ limit: 1000 });

  const paths = categories.map((category) => ({
    params: {
      id: Math.ceil(
        // eslint-disable-next-line max-len
        microCMSBlogs.contents.filter(
          (item) =>
            JSON.stringify(item.category) === JSON.stringify([category]),
        ).length / 12,
      ).toString(),
      category,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { category: Category; id: string };
}) => {
  const blogData = await getBlogs({
    category: params.category,
    pageNumber: Number(params.id),
  });

  return {
    props: {
      blogData,
      category: params.category,
      currentPage: params.id,
    },
  };
};

export default Index;
