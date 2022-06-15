import { Box, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import NewTitle from 'components/ui-elements/NewsTitle';
import Layout from 'components/ui-parts/Layout';
import { getNews, getTags } from 'libs/apiClient';
import { News } from 'types/news';
import { Tag } from 'types/tag';

type Props = {
  newsData: News[];
  tagsData: Tag[];
};

const news: NextPage<Props> = ({ newsData, tagsData }) => (
  <Layout tags={tagsData}>
    <NextSeo title="うぇぶスタNEWS" description="Web制作に関する情報を発信" />

    <Box
      w="90vw"
      maxW="1200px"
      m="auto"
      pl={{ base: 0, sm: '20px' }}
      mb="200px"
    >
      <Text as="h1" textStyle="blog.h1" my={{ base: '40px', md: '64px' }}>
        うぇぶスタNEWS
      </Text>

      {newsData.map((data) => (
        <NewTitle
          key={data.id}
          newsTitle={data.title}
          newsDate={data.createdAt}
          newCategory={data.important}
          newsUrl="/"
        />
      ))}
    </Box>
  </Layout>
);

export const getStaticProps = async () => {
  const microCMSNews = await getNews();
  const microCMSTags = await getTags();

  return {
    props: {
      newsData: microCMSNews.contents,
      tagsData: microCMSTags.contents,
    },
  };
};

export default news;
