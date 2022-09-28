/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { SearchIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { VFC, useState } from 'react';

const HeadSearch: VFC = () => {
  const router = useRouter(); // ルーターの取得
  const [q, setQ] = useState('');

  const saveInput = (e) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setQ(e.target.value);
  };

  // ボタンをクリックしたときの処理
  const searchEnter = (e) => {
    if (e.key === 'Enter') {
      // 未入力の時
      if (!q) {
        return;
      }
      router.push({
        pathname: '/search', // URL
        query: { q }, // 検索クエリ
      });
    }
  };

  return (
    <Flex
      as="form"
      onSubmit={(e) => e.preventDefault()}
      w={{ base: '100%', sm: '40%', md: '260px' }}
      minW="128px"
    >
      <Flex as="label" alignItems="center" w="100%" pos="relative">
        <SearchIcon pos="absolute" inset="auto 0 auto 12px" />
        <Flex
          as="input"
          type="search"
          placeholder="検索"
          w="100%"
          h="32px"
          pl="32px"
          border="1px solid #989898"
          borderRadius="4px"
          _focus={{
            outline: '2px solid #518CFF',
            backgroundColor: 'rgba(81,140,255,0.1)',
          }}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          onChange={(e) => saveInput(e)}
          onKeyDown={(e) => searchEnter(e)}
        />
      </Flex>
    </Flex>
  );
};
export default HeadSearch;
