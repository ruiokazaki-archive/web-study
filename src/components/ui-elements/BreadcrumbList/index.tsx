import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import { VFC } from 'react';

type Props = {
  data: {
    url: string;
    name: string;
  }[];
};

const BreadcrumbList: VFC<Props> = ({ data }) => (
  <Breadcrumb
    spacing="8px"
    separator={<ChevronRightIcon color="gray.500" />}
    bg="#E6E6E6"
    fontSize="12px"
    p={{ base: '12px 5vw', sm: '12px 5vw', md: '12px 10vw' }}
  >
    <BreadcrumbItem>
      <NextLink href="/" passHref>
        <BreadcrumbLink href="/">うぇぶスタトップ</BreadcrumbLink>
      </NextLink>
    </BreadcrumbItem>
    {data.map((item, i) => (
      <BreadcrumbItem
        key={`/${item.url}`}
        isCurrentPage={data.length === i + 1}
      >
        <NextLink href={`/${item.url}`} passHref>
          <BreadcrumbLink href="#">{item.name}</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
    ))}
  </Breadcrumb>
);

export default BreadcrumbList;
