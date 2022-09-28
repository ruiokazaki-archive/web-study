import { Box, Center, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import BreadcrumbList from 'components/ui-elements/BreadcrumbList';
import Card from 'components/ui-parts/Card';
import CardListTitle from 'components/ui-parts/CardListTitle';
import Layout from 'components/ui-parts/Layout';
import Pagination from 'components/ui-parts/Pagination';
import { getSearchBlogs, getTags } from 'libs/apiClient';
import { Blog } from 'types/blog';
import { MicroCMSList } from 'types/microCMS';
import { Tag } from 'types/tag';

import type { NextPage } from 'next';

type Props = {
  tags: Tag[];
};

export const generatePage = ({
  blogData,
  tags,
  currentPage,
}: Props & { currentPage?: string; blogData: MicroCMSList<Blog> }) => {
  const breadcrumbData = [
    {
      name: '検索結果',
      url: 'search',
    },
  ];

  return (
    <Layout tags={tags}>
      <BreadcrumbList data={breadcrumbData} />
      {blogData === undefined ? (
        <p>loading ...</p>
      ) : (
        <Box as="main" mt="80px">
          <Box textStyle="bodySize">
            <CardListTitle title="の検索結果" />
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
      )}
    </Layout>
  );
};

const Index: NextPage<Props> = ({ tags }) => {
  const router = useRouter();
  const [blogData, setBlogData] = useState<MicroCMSList<Blog>>();

  const getMicroCMSBlogs = async () => {
    const microCMSBlogs = await getSearchBlogs({
      q: router.query.pathname as string,
    });

    setBlogData(microCMSBlogs);
  };
  useEffect(() => {
    getMicroCMSBlogs();
  }, []);

  return generatePage({ blogData, tags });
};

export const getStaticProps = async () => {
  const microCMSTags = await getTags();

  return {
    props: {
      tags: microCMSTags.contents,
    },
  };
};

export default Index;
