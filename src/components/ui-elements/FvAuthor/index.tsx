import { Box, Flex, Text } from '@chakra-ui/react';
import React, { VFC } from 'react';

import useAuthorInfo from 'hooks/useAuthor';

import OriginalSpacer from '../OriginalSpacer';

const FvAuthor: VFC = () => {
  const { getAllAuthorInfo } = useAuthorInfo();
  const authorInfo = getAllAuthorInfo();

  return (
    <Flex
      as="ul"
      display={{ base: 'none', sm: 'flex', md: 'flex' }}
      alignItems="flex-end"
      gap={{ base: '16px', sm: '16px', md: '32px' }}
      w="100%"
      position="relative"
      zIndex="10"
    >
      {authorInfo.map((item) => (
        <Flex flexDirection="column" as="li" key={item.authorName}>
          <Flex
            justifyContent="center"
            alignItems="center"
            w="100%"
            color="#fff"
            bg={item.authorColor}
            borderRadius="9999px"
            fontWeight="bold"
            fontSize={{ base: '14px', sm: '12px', md: '14px' }}
            pb="100%"
            position="relative"
            sx={{
              '&::after': {
                content: '""',
                display: 'block',
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: {
                  base: '12.1px 7px 0 7px',
                  sm: '12.1px 7px 0 7px',
                  md: '15.6px 9px 0 9px',
                },
                borderColor: `${item.authorColor} transparent transparent transparent`,
                position: 'absolute',
                inset: {
                  base: 'auto auto -10px',
                  sm: 'auto auto -10px',
                  md: 'auto auto -14px',
                },
              },
            }}
          >
            <Text
              as="pre"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontFamily="body"
              padding="16px"
              position="absolute"
              inset="0 0"
            >
              {item.authorTitle}
            </Text>
          </Flex>
          <OriginalSpacer size="32px" />
          <Box as="img" src={`${item.fvAuthorImg}?width=320`} />
        </Flex>
      ))}
    </Flex>
  );
};
export default FvAuthor;
