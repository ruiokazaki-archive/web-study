import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import Article from 'components/ui-parts/Article';
import Card from 'components/ui-parts/Card';
import CardListTitle from 'components/ui-parts/CardListTitle';
import Head from 'components/ui-parts/Head';
import { getBlogs, getRcmBlogs } from 'libs/apiClient';
import { Blog } from 'types/blog';

import type { NextPage } from 'next';

type Props = {
  recommendArticles: Blog[];
  recentArticles: Blog[];
  designArticles: Blog[];
  engineerArticles: Blog[];
  columnArticles: Blog[];
};

const Index: NextPage<Props> = ({
  recommendArticles,
  recentArticles,
  designArticles,
  engineerArticles,
  columnArticles,
}) => {
  const contents = [
    {
      title: '新着記事',
      articles: recentArticles,
    },
    {
      title: 'デザイン',
      articles: designArticles,
    },
    {
      title: 'エンジニア',
      articles: engineerArticles,
    },
    {
      title: 'コラム',
      articles: columnArticles,
    },
  ];

  return (
    <>
      <Head />
      <Box as="main" mt="80px" w="90vw" mx="auto" maxW="1300px">
        <Box mt="80px">
          <CardListTitle title="おすすめ記事" />
          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            gap="40px 0"
            mt="40px"
          >
            {recommendArticles.map((blog) => (
              <Article blogData={blog} key={blog.id} />
            ))}
          </Flex>
        </Box>
        {contents.map(({ title, articles }) => (
          <Box mt="80px">
            <CardListTitle title={title} />
            <Flex
              flexWrap="wrap"
              justifyContent="space-between"
              gap="40px 0"
              mt="40px"
            >
              {articles.map((blog) => (
                <Card blogData={blog} key={blog.id} />
              ))}
            </Flex>
          </Box>
        ))}
      </Box>
    </>
  );
};
export const getStaticProps = async () => {
  const microCMSRecommendArticles = await getRcmBlogs();
  const recommendArticles = microCMSRecommendArticles.contents;
  let recommendArticlesLength = recommendArticles.length;

  while (recommendArticlesLength) {
    const j = Math.floor(Math.random() * recommendArticlesLength);
    const t = recommendArticles[(recommendArticlesLength -= 1)];
    recommendArticles[recommendArticlesLength] = recommendArticles[j];
    recommendArticles[j] = t;
  }

  const recentArticles = await getBlogs({ limit: 3 });
  const designArticles = await getBlogs({ limit: 3, category: 'design' });
  const engineerArticles = await getBlogs({ limit: 3, category: 'engineer' });
  const columnArticles = await getBlogs({ limit: 3, category: 'column' });

  return {
    props: {
      recommendArticles: recommendArticles.slice(0, 2),
      recentArticles: recentArticles.contents,
      designArticles: designArticles.contents,
      engineerArticles: engineerArticles.contents,
      columnArticles: columnArticles.contents,
    },
  };
};

export default Index;
