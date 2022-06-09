import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { VFC } from 'react';
import { TwitterShareButton } from 'react-share';

import LogoData from 'assets/twitterIcon';

type Props = {
  addTitle?: string;
  addUrl?: string;
};

const linkData = {
  title: 'うぇぶスタ - Web制作に関する情報を発信',
  via: 'web_ecc',
};

const ArticleTweetBtn: VFC<Props> = () => {
  const router = useRouter();
  const origin = typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';
  const url = `${origin}${router.asPath}`;

  return (
    <TwitterShareButton title={linkData.title} via={linkData.via} url={url}>
      <Flex
        justifyContent={{ base: 'center', sm: 'flex-start', md: 'flex-start' }}
        alignItems="center"
        gap="16px"
        w="100vw"
        h="152px"
        color="#fff"
        fontSize="32px"
        fontWeight="bold"
        bgImage={{
          sm: 'url("https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/e14affa3e1ad44b89981d5fc7f9054b8/articleTweetBtn.png")',
          md: 'url("https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/e14affa3e1ad44b89981d5fc7f9054b8/articleTweetBtn.png")',
        }}
        bgColor="#1DA1F2"
        bgSize={{
          base: '0,0',
          sm: 'auto 55%, auto 55%',
          md: 'auto 70%, auto 70%',
        }}
        bgPosition="right 16vw bottom"
        bgRepeat="no-repeat"
        p={{ base: '0', sm: '0 0 0 16vw', md: '0 0 0 16vw' }}
        opacity="1"
        transition="0.2s opacity"
        _hover={{
          opacity: '0.7',
        }}
      >
        <Box as={LogoData} />
        <Flex flexDirection="column">
          <Text as="span" fontSize="12px">
            記事が参考になったら
          </Text>
          <Text as="span" fontSize="20px">
            Twitterで共有お願いします！
          </Text>
        </Flex>
      </Flex>
    </TwitterShareButton>
  );
};
export default ArticleTweetBtn;
