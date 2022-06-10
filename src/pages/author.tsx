import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import AuthorInfo from 'components/ui-elements/AuthorInfo';
import OriginalSpacer from 'components/ui-elements/OriginalSpacer';
import Head from 'components/ui-parts/Head';

const AuthorList: NextPage = () => (
  <>
    <NextSeo
      title="メンバー紹介"
      description="うぇぶスタの記事を書いているゆかいな仲間たちです！"
    />
    <Head />
    <Flex
      as="h2"
      justifyContent="center"
      alignItems="center"
      h="176px"
      color="#fff"
      fontSize="32px"
      fontWeight="bold"
      bgImage={{
        sm: 'url("https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/f5b10df0ab7e4d849b08db6b36c10332/author_head.png?w=2000")',
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
  </>
);
export default AuthorList;
