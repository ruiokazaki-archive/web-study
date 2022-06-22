import { Box, Flex } from '@chakra-ui/react';
import React, { VFC } from 'react';

import useAuthorInfo from 'hooks/useAuthor';

const FvSPAuthor: VFC = () => {
  const { getAllAuthorInfo } = useAuthorInfo();
  const authorInfo = getAllAuthorInfo();

  return (
    <Flex
      as="ul"
      display={{ base: 'flex', sm: 'none', md: 'none' }}
      flexDirection="column"
      gap="24px"
      w="100%"
      position="relative"
    >
      {authorInfo.map((item, i) => (
        <Flex
          as="li"
          key={item.authorName}
          justifyContent="space-between"
          h="80px"
        >
          <Flex
            as="p"
            justifyContent="center"
            alignItems="center"
            w="calc(100% - 96px)"
            h="80px"
            color="#fff"
            bg={item.authorColor}
            borderRadius="16px"
            p="0 20px"
            fontWeight="bold"
            fontSize="14px"
            position="relative"
            sx={{
              '&::after': {
                content: '""',
                display: 'block',
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '8px 0 8px 13.9px',
                borderColor: `transparent transparent transparent ${item.authorColor}`,
                position: 'absolute',
                inset: 'auto -12px 12px auto',
              },
            }}
            style={
              (1 + i) % 2 === 0
                ? {
                    order: 1,
                  }
                : {
                    order: 2,
                    // '&::after': {
                    //   borderColor: `transparent ${item.authorColor} transparent transparent`,
                    // },
                  }
            }
          >
            {item.authorChat}
          </Flex>
          <Box
            as={item.authorIcon}
            width="80px"
            height="80px"
            borderRadius="9999px"
            style={
              (1 + i) % 2 === 0
                ? {
                    order: 2,
                  }
                : {
                    order: 1,
                  }
            }
          />
        </Flex>
      ))}
    </Flex>
  );
};
export default FvSPAuthor;
