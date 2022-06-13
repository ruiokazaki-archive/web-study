import { Box, Grid, GridItem } from '@chakra-ui/react';
import { VFC } from 'react';

import FooterLoge from 'assets/FooterLogo';
import FooterInner from 'components/ui-elements/FooterInner';
import FooterText from 'components/ui-elements/FooterText';
import FooterTitle from 'components/ui-elements/FooterTitle';
import Tag from 'components/ui-elements/Tag';

const footerItems = {
  siteMap: [
    {
      about: 'うぇぶスタについて',
      url: 'https://chakra-ui.com/docs/components/navigation/link',
    },
    {
      about: '学習相談はこちらから',
      url: 'https://nextjs.org/docs/api-reference/next/link',
    },
    {
      about: 'メンバー紹介',
      url: 'https://github.com/OkazakiRui/web-study',
    },
  ],
  categories: [
    {
      about: 'デザイン',
      url: 'https://dhsakjflsajfd',
    },
    {
      about: 'コラム',
      url: 'https://dhsakjflsajfd',
    },
    {
      about: 'フロントエンド',
      url: 'https://dhsakjflsajfd',
    },
  ],
  tags: [
    'React',
    'React',
    'React',
    'React',
    'React',
    'React',
    'React',
    'React',
    'React',
    'React',
  ],
};

const Footer: VFC = () => (
  <Grid
    w="90vw"
    maxW="1300px"
    m="auto"
    templateRows={{ base: 'repeat(4)', md: 'repeat(1)' }}
    templateColumns={{ base: 'repeat(1)', md: 'repeat(5,1fr)' }}
    gap={5}
    px="16px"
  >
    <GridItem mr={{ base: 0, md: '50px' }}>
      <FooterLoge />
    </GridItem>
    <GridItem rowSpan={1} colSpan={1}>
      <FooterTitle title="概要" />
      {footerItems.siteMap.map((item) => (
        <Box mb="16px">
          <FooterText about={item.about} url={item.url} />
        </Box>
      ))}
    </GridItem>
    <GridItem rowSpan={1} colSpan={1}>
      <FooterTitle title="カテゴリ" />
      {footerItems.categories.map((item) => (
        <Box mb="16px">
          <FooterText about={item.about} url={item.url} />
        </Box>
      ))}
    </GridItem>
    <GridItem rowSpan={1} colSpan={{ base: 1, md: 2 }}>
      <FooterTitle title="タグ" />
      {footerItems.tags.map((tag) => (
        <Tag tag={tag} tagUrl="/" />
      ))}
    </GridItem>
    <GridItem
      rowSpan={1}
      colSpan={{ base: 1, md: 5 }}
      borderTop="1px"
      pt={3}
      pb="66px"
      textStyle="card.text"
    >
      <FooterInner />
    </GridItem>
  </Grid>
);
export default Footer;
