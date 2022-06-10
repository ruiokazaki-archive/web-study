import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { VFC } from 'react';

import useAuthorInfo from 'hooks/useAuthor';
import { Author } from 'types/blog';

type Props = {
  authorData: Author;
};

const ArticleAuthor: VFC<Props> = ({ authorData }) => {
  const { getAuthorInfo } = useAuthorInfo();
  const authorInfo = getAuthorInfo(authorData);

  return (
    <Flex bg="#f5f5f5" p="40px 32px">
      <Icon
        as={authorInfo.authorIcon}
        borderRadius="9999px"
        width="80px"
        height="80px"
        mr="16px"
      />
      <Box>
        <Text fontSize="16px" fontWeight="bold" m="4px 0 8px">
          {authorInfo.authorName}
        </Text>
        <Text>{authorInfo.authorText}</Text>
      </Box>
    </Flex>
  );
};

export default ArticleAuthor;
