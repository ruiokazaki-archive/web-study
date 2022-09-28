import { Box, Flex } from '@chakra-ui/react';
import { VFC } from 'react';

import FooterLogo from 'assets/FooterLogo';
import FooterText from 'components/ui-elements/FooterText';
import FooterTitle from 'components/ui-elements/FooterTitle';
import OriginalSpacer from 'components/ui-elements/OriginalSpacer';
import Tag from 'components/ui-elements/Tag';
import { Tag as TagType } from 'types/tag';

const footerItems = [
  {
    title: '概要',
    contents: [
      {
        name: 'NEWS',
        url: '/news',
      },
      {
        name: 'メンバー紹介',
        url: '/author',
      },
    ],
    id: 1,
  },
  {
    title: 'カテゴリ',
    contents: [
      {
        name: 'デザイン',
        url: '/design',
      },
      {
        name: 'コラム',
        url: '/column',
      },
      {
        name: 'エンジニア',
        url: '/engineer',
      },
    ],
    id: 2,
  },
];

type Props = {
  tags: TagType[];
};

const Footer: VFC<Props> = ({ tags }) => (
  <Flex as="footer" px={{ base: '10vw', sm: '0', md: '0' }}>
    <Flex
      justifyContent="space-between"
      flexWrap="wrap"
      flexDirection={{ base: 'column', sm: 'row', md: 'row' }}
      textStyle="bodySize"
    >
      <Box w={{ base: 'auto', sm: '100%', md: 'fit-content' }}>
        <FooterLogo />
        <OriginalSpacer size="56px" footLogo />
      </Box>
      {footerItems.map((item) => (
        <Box key={item.id}>
          <Box w={{ base: 'auto', sm: '30%', md: 'fit-content' }} minW="120px">
            <FooterTitle title={item.title} />
            <OriginalSpacer size="32px" />
            <FooterText data={item} />
          </Box>
          <OriginalSpacer size="40px" footContents />
        </Box>
      ))}
      <Box w={{ base: 'auto', sm: '40%', md: '35%' }}>
        <FooterTitle title="タグ" />
        <OriginalSpacer size="32px" />
        <Flex as="ul" flexWrap="wrap" gap="12px 8px">
          {tags.map((item) => (
            <Tag key={item.id} tag={item.nameJa} tagUrl={`${item.nameEn}`} />
          ))}
        </Flex>
      </Box>
      <Box
        as="small"
        flexGrow={3}
        w="100%"
        textAlign="center"
        fontSize={{ base: '10px', sm: '12px', md: '12px' }}
        m="56px 0 0"
        sx={{
          '&::before': {
            content: "''",
            display: 'block',
            width: '100%',
            height: '1px',
            background: 'text',
            margin: ' 0 0 24px',
          },
        }}
      >
        © 2022 うぇぶスタ All Rights Reserved.
      </Box>
    </Flex>
  </Flex>
);

export default Footer;
