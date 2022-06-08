import { Flex } from '@chakra-ui/react';
import { VFC } from 'react';

import { Blog } from 'types/blog';

type tagsProps = {
  tagData: Blog;
};

const ArticleListLink: VFC<tagsProps> = ({ tagData }) => (
  <Flex as="ul" gap="8px">
    {tagData.tags.map((item) => (
      <Flex as="li" key={item.nameEn}>
        <Flex
          as="a"
          href="/"
          display="block"
          border="1px solid"
          borderColor="gray"
          p="4px 16px"
          borderRadius="9999px"
          opacity="1"
          transition="0.2s opacity"
          _hover={{
            opacity: '0.6',
          }}
          sx={{
            '&::before': {
              content: "'#'",
              marginRight: '4px',
            },
          }}
        >
          {item.nameJa}
        </Flex>
      </Flex>
    ))}
  </Flex>
);

export default ArticleListLink;
