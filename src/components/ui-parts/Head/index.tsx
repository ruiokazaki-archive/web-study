import { Flex, Spacer } from '@chakra-ui/react';
import { VFC } from 'react';

import HeadLink from 'components/ui-elements/HeadLink';
import HeadSearch from 'components/ui-elements/HeadSearch';
import Logo from 'components/ui-elements/Logo';
import OriginalSpacer from 'components/ui-elements/Spacer';
// chakrauiのspacerみる

const Head: VFC = () => (
  <Flex as="header" justifyContent="center" textStyle="nav">
    <Flex
      as="nav"
      justifyContent="space-between"
      alignItems="center"
      w="1132px"
    >
      <Logo />
      <OriginalSpacer size="32px" horizontal />
      <Flex
        as="p"
        justifyContent="center"
        alignItems="center"
        sx={{
          '&::before': {
            content: "''",
            display: 'block',
            width: '12px',
            height: '1px',
            background: 'gray',
            margin: '0 12px 0 0',
          },
          '&::after': {
            content: "''",
            display: 'block',
            width: '12px',
            height: '1px',
            background: 'gray',
            margin: '0 0 0 12px',
          },
        }}
      >
        Web制作に関する情報を発信
      </Flex>
      <Spacer />
      <HeadLink />
      <OriginalSpacer size="64px" horizontal />
      <HeadSearch />
    </Flex>
  </Flex>
);
export default Head;
