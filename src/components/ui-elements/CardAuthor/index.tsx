import { Flex, Icon, Text } from '@chakra-ui/react';
import { VFC } from 'react';

import useAuthorInfo from 'hooks/useAuthor';
import { Author } from 'types/blog';

type Props = {
  author: Author;
};

const CardAuthor: VFC<Props> = ({ author }) => {
  const { getAuthorInfo } = useAuthorInfo();
  const authorInfo = getAuthorInfo(author);

  return (
    <Flex as={Text} textStyle="article.text" fontWeight="bold" color="main">
      <Icon
        as={authorInfo.authorIcon}
        borderRadius="9999px"
        width="30px"
        height="30px"
        mr="8px"
      />
      {authorInfo.authorName}
    </Flex>
  );
};
export default CardAuthor;
