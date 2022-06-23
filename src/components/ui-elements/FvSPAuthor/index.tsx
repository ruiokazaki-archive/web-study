import { Box, Flex, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { VFC } from 'react';

import useAuthorInfo from 'hooks/useAuthor';

const chatKeyframes = keyframes`
  0% { opacity:0; }
  100% { opacity:1; transform:translateY(0); }
`;

const iconKeyframes = keyframes`
  0% { opacity:0; }
  100% { opacity:1; }
`;

const chatAnimation = (i: number) =>
  `${chatKeyframes} 0.3s ${i + 1}s ease-in-out forwards`;

const iconAnimation = (i: number) =>
  `${iconKeyframes} 0.2s ${i + 1}s ease-in-out forwards`;

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
            as={motion.p}
            animation={chatAnimation(i)}
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
            opacity="0"
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
                    transform: 'translateX(8px)',
                  }
                : {
                    order: 2,
                    transform: 'translateX(-8px)',
                  }
            }
          >
            {item.authorChat}
          </Flex>
          <Box
            as={motion.div}
            animation={iconAnimation(i)}
            opacity="0"
            style={
              (1 + i) % 2 === 0
                ? {
                    order: 2,
                  }
                : {
                    order: 1,
                  }
            }
          >
            <Box
              as={item.authorIcon}
              width="80px"
              height="80px"
              borderRadius="9999px"
            />
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
export default FvSPAuthor;
