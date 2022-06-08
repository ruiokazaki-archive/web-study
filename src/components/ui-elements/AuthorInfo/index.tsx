import { Flex, Icon, Text } from '@chakra-ui/react';
import { VFC } from 'react';

import useAuthorInfo from 'hooks/useAuthor';

const AuthorInfo: VFC = () => {
  const { getAllAuthorInfo } = useAuthorInfo();
  const authorInfo = getAllAuthorInfo();

  return (
    <Flex
      as="ul"
      justifyContent="center"
      flexWrap="wrap"
      gap="48px 40px"
      w="90vw"
      maxW="800px"
      m="0 auto"
    >
      {authorInfo.map((item) => (
        <Flex
          as="li"
          key={item.authorName}
          w="240px"
          h="240px"
          borderRadius="8px"
          overflow="hidden"
          position="relative"
          _hover={{
            '>div': {
              opacity: 1,
            },
          }}
        >
          <Icon as={item.authorIcon} w="100%" h="100%" objectFit="cover" />
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            w="100%"
            h="100%"
            color="#fff"
            bg="rgba(0, 0, 0, 0.5)"
            p="16px"
            transition="0.2s opacity"
            position="absolute"
            opacity="0"
          >
            <Text fontSize="12px">{item.authorAttribute}</Text>
            <Text fontSize="22px" fontWeight="bold" m="0 0 8px">
              {item.authorName}
            </Text>
            <Text>{item.authorText}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
export default AuthorInfo;
