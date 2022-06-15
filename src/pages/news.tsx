import { Box, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import NewTitle from 'components/ui-elements/NewsTitle';
import Footer from 'components/ui-parts/Footer';
import Head from 'components/ui-parts/Head';
import { getNews } from 'libs/apiClient';
import { News } from 'types/news';

type Props = {
  newData: News[];
};

const news: NextPage<Props> = ({ newData }) => (
  <>
    <NextSeo title="うぇぶスタNEWS" description="Web制作に関する情報を発信" />
    <Head />

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

      {newData.map((data) => (
        <NewTitle
          key={data.id}
          newsTitle={data.title}
          newsDate={data.createdAt}
          newCategory={data.important}
          newsUrl="/"
        />
      ))}
    </Box>

    <Footer />
  </>
);

export const getStaticProps = async () => {
  const microCMSData = await getNews();

  return {
    props: {
      newData: microCMSData.contents,
    },
  };
};

export default news;
