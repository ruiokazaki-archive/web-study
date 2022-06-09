import { Box } from '@chakra-ui/react';
import { VFC } from 'react';

type OriginalSpacerProps = {
  size: string;
  horizontal?: boolean;
  head?: boolean;
};

const OriginalSpacer: VFC<OriginalSpacerProps> = ({
  size,
  horizontal,
  head = false,
}) => (
  <Box
    display={{ base: 'none', sm: 'block', md: 'block' }}
    sx={{
      ...(horizontal
        ? {
            width: size,
            height: 'auto',
          }
        : {
            width: 'auto',
            height: size,
          }),
      ...(head
        ? {
            display: 'block',
            '@media screen and (max-width: 600px)': {
              display: 'none',
            },
          }
        : {
            display: 'block',
          }),
    }}
  />
);

export default OriginalSpacer;
