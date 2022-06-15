import { Text, Link, Flex, Center } from '@chakra-ui/react';
import NextLink from 'next/link';
import { VFC } from 'react';

type Props = {
  newsTitle: string;
  newsUrl: string;
  newsDate: string;
  newCategory: string | boolean;
};

const NewsTitle: VFC<Props> = ({
  newsTitle,
  newsUrl,
  newsDate,
  newCategory,
}) => (
  <Flex
    direction={{ base: 'column', sm: 'row' }}
    align={{ base: 'start', sm: 'center' }}
    gap={{ base: '8px', sm: '16px' }}
    mb={{ base: '24px', sm: '32px' }}
    fontWeight="bold"
  >
    <Center
      w="75px"
      border="1px"
      borderColor="#518CFF"
      color="#3D78D8"
      fontSize="12px"
      borderRadius="4px"
    >
      {newCategory ? '重要' : 'お知らせ'}
    </Center>
    <Text textStyle="blog.profile" color="gray" order={{ base: 3, sm: 1 }}>
      {newsDate}
    </Text>
    <NextLink href={newsUrl} passHref>
      <Link as="a" href="/" order={2}>
        {newsTitle}
      </Link>
    </NextLink>
  </Flex>
);
export default NewsTitle;
