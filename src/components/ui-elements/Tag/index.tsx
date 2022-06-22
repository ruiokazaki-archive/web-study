import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { VFC } from 'react';

type Props = { tag: string; tagUrl: string };

const Tag: VFC<Props> = ({ tag, tagUrl }) => (
  <Box as="li" listStyleType="none">
    <NextLink href={`/tag/${tagUrl}`} passHref>
      <Link
        as="a"
        href={`/tag/${tagUrl}`}
        borderRadius="9999px"
        display="inline-block"
        p="4px 12px"
        borderColor="text"
        borderStyle="solid"
        borderWidth="1px"
        fontSize="12px"
        _hover={{ opacity: '0.5' }}
      >
        {`# ${tag}`}
      </Link>
    </NextLink>
  </Box>
);
export default Tag;
