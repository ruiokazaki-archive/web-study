import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import ArticleHead from 'components/ui-elements/ArticleHead';
import ArticleIndexLink from 'components/ui-elements/ArticleIndexLink';
import ArticleTweetBtn from 'components/ui-elements/ArticleTweetBtn';
import OriginalSpacer from 'components/ui-elements/OriginalSpacer';
import ArticleBody from 'components/ui-parts/ArticleBody';
import ArticleRcm from 'components/ui-parts/ArticleRcm';
import Layout from 'components/ui-parts/Layout';
import { getBlogById, getBlogs, getRcmBlogs, getTags } from 'libs/apiClient';
import { Blog } from 'types/blog';
import { Tag } from 'types/tag';

import type { NextPage } from 'next';

type Props = {
  blogData: Blog;
  rcmData: Blog[];
  tags: Tag[];
};

const Article: NextPage<Props> = ({ blogData, rcmData, tags }) => (
  <Layout tags={tags}>
    <NextSeo
      title={blogData.title}
      description={`この記事では${blogData.tags
        .map((item) => item.nameJa)
        .join('、')}について掲載しています！`}
    />
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
    <OriginalSpacer size="56px" />
    <ArticleIndexLink />
    <OriginalSpacer size="56px" />
    <ArticleTweetBtn />
    <OriginalSpacer size="56px" />
    <ArticleRcm blogData={rcmData} />
    <OriginalSpacer size="160px" />
  </Layout>
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
  const microCMSBlogs = await getRcmBlogs();
  const rcmBlogs = microCMSBlogs.contents;
  let rcmLength = rcmBlogs.length;

  while (rcmLength) {
    const j = Math.floor(Math.random() * rcmLength);
    const t = rcmBlogs[(rcmLength -= 1)];
    rcmBlogs[rcmLength] = rcmBlogs[j];
    rcmBlogs[j] = t;
  }

  const microCMSTags = await getTags();

  return {
    props: {
      blogData: data,
      rcmData: rcmBlogs.slice(0, 3),
      tags: microCMSTags.contents,
    },
  };
};

export default Article;
