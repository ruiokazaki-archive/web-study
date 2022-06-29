import { Box, Center, Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';

import BreadcrumbList from 'components/ui-elements/BreadcrumbList';
import Card from 'components/ui-parts/Card';
import CardListTitle from 'components/ui-parts/CardListTitle';
import Layout from 'components/ui-parts/Layout';
import Pagination from 'components/ui-parts/Pagination';
import { getBlogs, getTags } from 'libs/apiClient';
import { Blog, Category } from 'types/blog';
import { MicroCMSList } from 'types/microCMS';
import { Tag } from 'types/tag';
import categoryCorrespondenceTable from 'utils/categoryCorrespondenceTable';

import type { NextPage } from 'next';

type Props = {
  blogData: MicroCMSList<Blog>;
  category: Category;
  tags: Tag[];
};

export const generatePage = ({
  blogData,
  category,
  tags,
  currentPage,
  router,
}: Props & { currentPage?: string; router: NextRouter }) => {
  const breadcrumbData = [
    {
      name: categoryCorrespondenceTable[category],
      url: category,
    },
  ];

  return (
    <Layout tags={tags}>
      <NextSeo
        title={`${categoryCorrespondenceTable[category]}の記事一覧`}
        description={`カテゴリ：${categoryCorrespondenceTable[category]}の記事一覧です。`}
        openGraph={{
          url: `https://web-study.blog${
            router.asPath || window.location.pathname
          }`,
        }}
      />
      <BreadcrumbList data={breadcrumbData} />
      <Box as="main" mt="80px">
        <Box textStyle="bodySize">
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
          <Center mt="64px">
            <Pagination
              totalBlogCount={blogData.totalCount}
              currentPageNumber={
                currentPage !== undefined ? Number(currentPage) : 1
              }
            />
          </Center>
        </Box>
      </Box>
    </Layout>
  );
};

const Index: NextPage<Props> = ({ blogData, category, tags }) => {
  const router = useRouter();

  return generatePage({ blogData, category, tags, router });
};
export const getStaticPaths = () => {
  const categories = ['design', 'engineer', 'column'];

  return {
    paths: categories.map((category) => ({ params: { category } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { category: Category };
}) => {
  const blogData = await getBlogs({ category: params.category });
  const microCMSTags = await getTags();

  return {
    props: {
      blogData,
      category: params.category,
      tags: microCMSTags.contents,
    },
  };
};

export default Index;
