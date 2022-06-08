import { Box, Flex, Text } from '@chakra-ui/react';
import { VFC } from 'react';

import LogoData from 'assets/twitterIcon';

type Props = {
  link: string;
};

const ArticleTweetBtn: VFC<Props> = ({ link }) => (
  <Flex
    as="a"
    href={link}
    justifyContent={{ base: 'center', sm: 'flex-start', md: 'flex-start' }}
    alignItems="center"
    gap="16px"
    h="152px"
    color="#fff"
    fontSize="32px"
    fontWeight="bold"
    bgImage={{
      sm: 'url("https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/e14affa3e1ad44b89981d5fc7f9054b8/articleTweetBtn.png")',
      md: 'url("https://images.microcms-assets.io/assets/d9db883bc929477a9cbafcb351fa25df/e14affa3e1ad44b89981d5fc7f9054b8/articleTweetBtn.png")',
    }}
    bgColor="#1DA1F2"
    bgSize={{ base: '0,0', sm: 'auto 55%, auto 55%', md: 'auto 70%, auto 70%' }}
    bgPosition="right 16vw bottom"
    bgRepeat="no-repeat"
    p={{ base: '0', sm: '0 0 0 16vw', md: '0 0 0 16vw' }}
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
);
export default ArticleTweetBtn;
