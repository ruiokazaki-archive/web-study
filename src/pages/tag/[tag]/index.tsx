import { Box, Center, Flex } from '@chakra-ui/react';

import Card from 'components/ui-parts/Card';
import CardListTitle from 'components/ui-parts/CardListTitle';
import Layout from 'components/ui-parts/Layout';
import Pagination from 'components/ui-parts/Pagination';
import { getBlogs, getTags, getTagsIdByName } from 'libs/apiClient';
import { Blog } from 'types/blog';
import { MicroCMSList } from 'types/microCMS';
import { Tag } from 'types/tag';

import type { NextPage } from 'next';

type Props = {
  blogData: MicroCMSList<Blog>;
  tagName: string;
  tags: Tag[];
};

const Index: NextPage<Props> = ({ blogData, tagName, tags }) => (
  <Layout tags={tags}>
    <Box as="main" mt="80px" w="90vw" mx="auto" maxW="1300px">
      <CardListTitle title={`タグ：${tagName}`} />
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

export const getStaticPaths = async () => {
  const microCMSTags = await getTags();

  return {
    paths: microCMSTags.contents.map((tag) => ({
      params: { tag: tag.nameEn },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { tag: Tag['nameEn'] };
}) => {
  const microCMSTag = await getTagsIdByName(params.tag);

  const blogData = await getBlogs({ tagId: microCMSTag.contents[0].id });
  const microCMSTags = await getTags();

  return {
    props: {
      blogData,
      tagName: microCMSTag.contents[0].nameJa,
      tags: microCMSTags.contents,
    },
  };
};

export default Index;
