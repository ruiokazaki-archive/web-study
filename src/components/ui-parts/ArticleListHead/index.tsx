import { Flex } from '@chakra-ui/react';
import { VFC } from 'react';

import ArticleListLink from 'components/ui-elements/ArticleListLink';
import CardListTitle from 'components/ui-parts/CardListTitle';

type Props = {
  title: string;
  category: string;
};

const ArticleListHead: VFC<Props> = ({ title, category }) => (
  <Flex justify="space-between">
    <CardListTitle title={title} />
    <ArticleListLink category={category} />
  </Flex>
);
export default ArticleListHead;
