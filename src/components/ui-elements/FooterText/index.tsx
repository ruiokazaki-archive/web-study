import { Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { VFC } from 'react';

type Props = {
  data: {
    title: string;
    contents: {
      name: string;
      url: string;
    }[];
    id: number;
  };
};

const FooterText: VFC<Props> = ({ data }) => (
  <Flex flexDirection="column" gap="16px" fontSize="14px">
    {data.contents.map((item) => (
      <NextLink href={item.url} passHref key={item.url}>
        <Link href={item.url}>{item.name}</Link>
      </NextLink>
    ))}
  </Flex>
);
export default FooterText;
