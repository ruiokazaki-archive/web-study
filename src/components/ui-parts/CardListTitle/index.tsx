import { Text, Box, Flex } from '@chakra-ui/react';
import { VFC } from 'react';

type Props = {
  title: string;
};

const CardListTitle: VFC<Props> = ({ title }) => (
  <Flex alignItems="center" width="fit-content">
    <Text textStyle="article.title">{title}</Text>
    <Box w="40px" h="1px" ml="24px" bg="text" />
  </Flex>
);
export default CardListTitle;
