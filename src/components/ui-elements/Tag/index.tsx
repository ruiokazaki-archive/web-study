import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { VFC } from 'react';

type Props = { tag: string; tagUrl: string };

const Tag: VFC<Props> = ({ tag, tagUrl }) => (
  <Link href={`/tag/${tagUrl}`}>
    <Button
      colorScheme="gray"
      variant="outline"
      px="10px"
      mx="8px"
      my="10px"
      borderRadius="20px"
      fontSize="12px"
      _hover={{ opacity: '0.5' }}
    >
      {`# ${tag}`}
    </Button>
  </Link>
);
export default Tag;
