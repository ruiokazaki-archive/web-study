import { Text } from '@chakra-ui/react';
import { VFC, ReactNode } from 'react';

import CalendarIcon from 'assets/CalendarIcon';

type Props = {
  children: ReactNode;
};

const CardDate: VFC<Props> = ({ children }) => (
  <Text
    textStyle="card.text"
    display="flex"
    alignItems="center"
    color="gray"
    gap="6px"
  >
    <CalendarIcon />
    {children}
  </Text>
);
export default CardDate;
