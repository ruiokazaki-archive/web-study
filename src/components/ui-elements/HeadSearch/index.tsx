import { SearchIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { VFC } from 'react';

const HeadSearch: VFC = () => (
  <Flex as="form" w={{ base: '100%', sm: '40%', md: '260px' }} minW="128px">
    <Flex as="label" alignItems="center" w="100%" pos="relative">
      <SearchIcon pos="absolute" inset="auto 0 auto 12px" />
      <Flex
        as="input"
        type="search"
        placeholder="検索"
        w="100%"
        h="32px"
        pl="32px"
        border="1px solid #989898"
        borderRadius="4px"
        _focus={{
          outline: '2px solid #518CFF',
          backgroundColor: 'rgba(81,140,255,0.1)',
        }}
      />
    </Flex>
  </Flex>
);
export default HeadSearch;
