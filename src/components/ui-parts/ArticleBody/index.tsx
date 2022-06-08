import { Box } from '@chakra-ui/react';
import { VFC } from 'react';
import sanitizeHtml from 'sanitize-html';

import { Blog } from 'types/blog';

import ArticleAuthor from '../../ui-elements/ArticleAuthor';
import ArticleTags from '../../ui-elements/ArticleTags';
import OriginalSpacer from '../../ui-elements/OriginalSpacer';

type Props = {
  data: Blog;
};

const ArticleBody: VFC<Props> = ({ data }) => (
  <Box bg="#fff" p="56px 8%" fontSize="16px" lineHeight="32px">
    <Box
      textStyle="article"
      dangerouslySetInnerHTML={{
        // eslint-disable-next-line max-len
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        __html: sanitizeHtml(data.body),
      }}
    />
    <OriginalSpacer size="64px" />
    <ArticleTags tagData={data} />
    <OriginalSpacer size="56px" />
    <ArticleAuthor authorData={data.author[0]} />
  </Box>
);
export default ArticleBody;
