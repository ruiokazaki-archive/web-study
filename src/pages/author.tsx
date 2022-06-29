import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import AuthorInfo from 'components/ui-elements/AuthorInfo';
import BreadcrumbList from 'components/ui-elements/BreadcrumbList';
import OriginalSpacer from 'components/ui-elements/OriginalSpacer';
import Layout from 'components/ui-parts/Layout';
import { getTags } from 'libs/apiClient';
import { Tag } from 'types/tag';

type Props = {
  tags: Tag[];
};

const AuthorList: NextPage<Props> = ({ tags }) => {
  const breadcrumbData = [
    {
      name: 'メンバー紹介',
      url: 'author',
    },
  ];

  return (
    <Layout tags={tags}>
      <BreadcrumbList data={breadcrumbData} />
      <NextSeo
        title="メンバー紹介"
        description="うぇぶスタの記事を書いているゆかいな仲間たちです！"
        openGraph={{
          url: 'https://web-study.blog/author',
        }}
      />
      <Flex
        as="h2"
        justifyContent="center"
        alignItems="center"
        h="176px"
        color="#fff"
        fontSize="32px"
        fontWeight="bold"
        bgImage={{
          sm: 'url("https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/f5b10df0ab7e4d849b08db6b36c10332/author_head.png?w=1000")',
          md: 'url("https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/f5b10df0ab7e4d849b08db6b36c10332/author_head.png?w=2000")',
        }}
        bgColor="main"
        bgSize="contain"
        bgPosition="center bottom"
        bgRepeat="no-repeat"
        m={{
          base: '0 0 40px',
          sm: '0 0 80px',
          md: '0 0 80px',
        }}
      >
        メンバー紹介
      </Flex>
      <AuthorInfo />
      <OriginalSpacer size="80px" />
    </Layout>
  );
};

export default AuthorList;

export const getStaticProps = async () => {
  const microCMSTags = await getTags();

  return {
    props: {
      tags: microCMSTags.contents,
    },
  };
};
