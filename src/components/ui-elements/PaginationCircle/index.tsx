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
  const pathCategory = router.query.category as string;

  return (
    <NextLink href={`${pathCategory}/${pageNumber}`}>
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
