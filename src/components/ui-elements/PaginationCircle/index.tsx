import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, VFC } from 'react';

type CircleProps = {
  pageNumber: number;
  currentPage?: boolean;
  children: ReactNode;
};

const Circle: VFC<CircleProps> = ({
  pageNumber,
  currentPage = false,
  children,
}) => {
  const router = useRouter();

  const path = router.asPath.split('/')[1] === 'tag'
      ? router.asPath.split('/').slice(1, 3).join('/')
      : router.asPath.split('/').slice(1, 2).join('/');

  return (
    <NextLink href={`/${path}/${pageNumber}`}>
      <Box
        w="48px"
        h="48px"
        cursor="pointer"
        borderRadius="full"
        textAlign="center"
        lineHeight="48px"
        bg={currentPage ? 'main' : 'transparent'}
        color={currentPage ? 'white' : 'text'}
        textStyle="pagination"
      >
        {children}
      </Box>
    </NextLink>
  );
};

export default Circle;
