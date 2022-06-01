import { Flex, Text } from '@chakra-ui/react';
import { VFC, ReactNode } from 'react';

import CalendarIcon from 'assets/CalendarIcon';

type Props = {
  children: ReactNode;
};

const CardDate: VFC<Props> = ({ children }) => (
  <Flex
    as={Text}
    textStyle="card.text"
    alignItems="center"
    color="gray"
    gap="6px"
  >
    <CalendarIcon />
    {children}
  </Flex>
);
export default CardDate;
