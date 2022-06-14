import { Box, Center, Flex } from '@chakra-ui/react';

import Card from 'components/ui-parts/Card';
import CardListTitle from 'components/ui-parts/CardListTitle';
import Layout from 'components/ui-parts/Layout';
import Pagination from 'components/ui-parts/Pagination';
import { getBlogs, getTags } from 'libs/apiClient';
import { Blog, Category } from 'types/blog';
import { MicroCMSList } from 'types/microCMS';
import { Tag } from 'types/tag';

import type { NextPage } from 'next';

type Props = {
  blogData: MicroCMSList<Blog>;
  category: Category;
  currentPage: string;
  tags: Tag[];
};

const categoryCorrespondenceTable: { [K in Category]: string } = {
  column: 'コラム',
  engineer: 'エンジニア',
  design: 'デザイン',
};

const Index: NextPage<Props> = ({ blogData, category, currentPage, tags }) => (
  <Layout tags={tags}>
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
  </Layout>
);

export const getStaticPaths = async () => {
  const categories = ['design', 'engineer', 'column'];

  const microCMSBlogs = await getBlogs({ limit: 1000 });

  const paths: {
    params: { category: string; id: string };
  }[] = [];
  categories.forEach((category) => {
    const id = [
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      ...new Array(
        Math.ceil(
          microCMSBlogs.contents.filter(
            (item) =>
              JSON.stringify(item.category) === JSON.stringify([category]),
          ).length / 12,
        ),
      ),
    ].map((_, i) => i + 1);

    id.forEach((i) => {
      paths.push({
        params: {
          id: String(i),
          category,
        },
      });
    });
  });

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

  const microCMSTags = await getTags();

  return {
    props: {
      blogData,
      category: params.category,
      currentPage: params.id,
      tags: microCMSTags.contents,
    },
  };
};

export default Index;
