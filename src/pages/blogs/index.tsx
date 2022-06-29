import { Box, Center, Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { NextRouter, useRouter } from 'next/router';

import BreadcrumbList from 'components/ui-elements/BreadcrumbList';
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

export const generatePage = ({
  blogData,
  tags,
  currentPage,
  router,
}: Props & { currentPage?: string; router: NextRouter }) => {
  const breadcrumbData = [
    {
      name: 'ブログ一覧',
      url: 'blogs',
    },
  ];

  return (
    <Layout tags={tags}>
      <NextSeo
        title="全ての投稿記事一覧"
        description="全ての投稿記事一覧です。"
        openGraph={{
          url: `https://web-study.blog${
            router.asPath || window.location.pathname
          }`,
        }}
      />
      <BreadcrumbList data={breadcrumbData} />
      <Box as="main" mt="80px">
        <Box textStyle="bodySize">
          <CardListTitle title="ブログ一覧" />
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

const Index: NextPage<Props> = ({ blogData, tags }) => {
  const router = useRouter();

  return generatePage({ blogData, tags, router });
};

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
