import { Box, Grid, GridItem } from '@chakra-ui/react';
import { VFC } from 'react';

import FooterLoge from 'assets/FooterLogo';
import FooterInner from 'components/ui-elements/FooterInner';
import FooterText from 'components/ui-elements/FooterText';
import FooterTitle from 'components/ui-elements/FooterTitle';
import Tag from 'components/ui-elements/Tag';
import { Tag as TagType } from 'types/tag';

const footerItems = {
  siteMap: [
    {
      about: 'うぇぶスタについて',
      url: '/',
    },
    {
      about: '学習相談はこちらから',
      url: '/',
    },
    {
      about: 'メンバー紹介',
      url: '/author',
    },
  ],
  categories: [
    {
      about: 'デザイン',
      url: '/design',
    },
    {
      about: 'コラム',
      url: '/column',
    },
    {
      about: 'エンジニア',
      url: '/engineer',
    },
  ],
};

type Props = {
  tags: TagType[];
};

const Footer: VFC<Props> = ({ tags }) => (
  <Grid
    textStyle="bodySize"
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
        <Box mb="16px" key={item.about}>
          <FooterText about={item.about} url={item.url} />
        </Box>
      ))}
    </GridItem>
    <GridItem rowSpan={1} colSpan={1}>
      <FooterTitle title="カテゴリ" />
      {footerItems.categories.map((item) => (
        <Box mb="16px" key={item.about}>
          <FooterText about={item.about} url={item.url} />
        </Box>
      ))}
    </GridItem>
    <GridItem rowSpan={1} colSpan={{ base: 1, md: 2 }}>
      <FooterTitle title="タグ" />
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag.nameJa} tagUrl={`${tag.nameEn}`} />
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
