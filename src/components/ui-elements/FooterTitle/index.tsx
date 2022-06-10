import { Text } from '@chakra-ui/react';
import { VFC } from 'react';

type Props = {
  title: string;
};

const footerTitle: VFC<Props> = ({ title }) => (
  <Text
    display="flex"
    alignItems="center"
    mb="26px"
    textStyle="blog.h3"
    _before={{
      content: '""',
      w: '8px',
      h: '1px',
      bg: 'text',
      display: 'block',
      mr: '12px',
    }}
  >
    {title}
  </Text>
);

export default footerTitle;
