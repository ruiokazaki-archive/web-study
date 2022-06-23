import { Box } from '@chakra-ui/react';
import { VFC } from 'react';

import ArticleAuthor from 'components/ui-elements/ArticleAuthor';
import ArticleTags from 'components/ui-elements/ArticleTags';
import OriginalSpacer from 'components/ui-elements/OriginalSpacer';
import { Blog } from 'types/blog';

type Props = {
  data: Blog;
};

const ArticleBody: VFC<Props> = ({ data }) => (
  <Box bg="#fff" p="56px 8%" fontSize="16px" lineHeight="32px">
    <Box
      textStyle="blog"
      dangerouslySetInnerHTML={{
        // eslint-disable-next-line max-len
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        __html: data.body,
      }}
    />
    <OriginalSpacer size="64px" />
    <ArticleTags tagData={data} />
    <OriginalSpacer size="56px" />
    <ArticleAuthor authorData={data.author[0]} />
  </Box>
);
export default ArticleBody;
