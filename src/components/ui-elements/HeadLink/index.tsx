import { Box, Flex } from '@chakra-ui/react';
import { VFC } from 'react';

const link = [
  { id: 1, name: 'デザイン', path: '/design' },
  { id: 2, name: 'エンジニア', path: '/engineer' },
  { id: 3, name: 'コラム', path: '/column' },
];

const HeadLink: VFC = () => (
  <Flex as="ul" h="100%" fontWeight="bold">
    {link.map((item, i) => (
      <Box as="li" key={item.id} h="100%">
        <Flex
          as="a"
          href={item.path}
          alignItems="center"
          h="100%"
          p="0 12px"
          _hover={{ textDecoration: 'underline' }}
        >
          {item.name}
        </Flex>
      </Box>
    ))}
  </Flex>
);
export default HeadLink;
