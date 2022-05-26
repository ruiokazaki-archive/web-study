import { Box, Flex } from '@chakra-ui/react';
import { VFC } from 'react';

const link = [
  { id: 1, name: 'デザイン', path: '/design' },
  { id: 2, name: 'エンジニア', path: '/engineer' },
  { id: 3, name: 'コラム', path: '/column' },
];

const HeadLink: VFC = () => (
  <Flex
    as="ul"
    gap="56px"
    fontWeight="bold"
  >
    {link.map((item, i) => (
      <Box as="li" key={item.id}>
        <Box
          as="a"
          href={item.path}
          display="block"
          h="100%"
          _hover={{ textDecoration: 'underline' }}
        >
          {item.name}
        </Box>
      </Box>
    ))}
  </Flex>
);
export default HeadLink;
