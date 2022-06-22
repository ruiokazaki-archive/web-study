import { Heading, Text } from '@chakra-ui/react';
import { VFC } from 'react';

import CardAuthor from 'components/ui-elements/CardAuthor';
import { Blog } from 'types/blog';

type Props = {
  data: Blog;
};

const ArticleHead: VFC<Props> = ({ data }) => (
  <>
    <Text as="span">{data.publishedAt.slice(0, 10).replace(/-/g, '.')}</Text>
    <Heading as="h2" m="16px 0 12px" fontSize="32px">
      {data.title}
    </Heading>
    <CardAuthor author={data.author[0]} />
  </>
);
export default ArticleHead;
