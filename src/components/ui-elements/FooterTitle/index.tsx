import { Box } from '@chakra-ui/react';
import { VFC } from 'react';

type Props = {
  title: string;
};

const footerTitle: VFC<Props> = ({ title }) => (
  <Box
    display="flex"
    alignItems="center"
    fontSize="20px"
    fontWeight="bold"
    position="relative"
    _before={{
      content: '""',
      display: 'block',
      w: '12px',
      h: '1px',
      bg: 'text',
      position: 'absolute',
      inset: 'auto 0 auto -20px',
    }}
  >
    {title}
  </Box>
);

export default footerTitle;
