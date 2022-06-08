import { Box } from '@chakra-ui/react';

import ArticleHead from 'components/ui-elements/ArticleHead';
import OriginalSpacer from 'components/ui-elements/OriginalSpacer';
import ArticleBody from 'components/ui-parts/ArticleBody';
import Head from 'components/ui-parts/Head';
import { getBlogById, getBlogs } from 'libs/apiClient';
import { Blog } from 'types/blog';

import type { NextPage } from 'next';

type Props = {
  blogData: Blog;
};

const Article: NextPage<Props> = ({ blogData }) => (
  <>
    <Head />
    <Box
      w={{
        base: '90vw',
        sm: '80vw',
        md: '70vw',
      }}
      maxW="960px"
      m="88px auto 0"
    >
      <ArticleHead data={blogData} />
      <OriginalSpacer size="48px" />
      <Box as="img" src={blogData.thumbnail.url} w="100%" />
      <ArticleBody data={blogData} />
    </Box>
  </>
);
export const getStaticPaths = async () => {
  const microCMSBlogs = await getBlogs({ limit: 1000 });
  const paths = microCMSBlogs.contents.map((blogData) => ({
    params: { id: blogData.id },
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
  const data = await getBlogById(params.id);

  return {
    props: {
      blogData: data,
    },
  };
};

export default Article;
