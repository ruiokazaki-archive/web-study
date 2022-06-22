import { Box } from '@chakra-ui/react';
import { VFC } from 'react';

type OriginalSpacerProps = {
  size: string;
  horizontal?: boolean;
  head?: boolean;
  footLogo?: boolean;
  footContents?: boolean;
};

const OriginalSpacer: VFC<OriginalSpacerProps> = ({
  size,
  horizontal,
  head = false,
  footLogo = false,
  footContents = false,
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
      ...(footLogo
        ? {
            display: 'none',
            '@media screen and (max-width: 1024px)': {
              display: 'block',
            },
          }
        : {
            display: 'block',
          }),
      ...(footContents
        ? {
            display: 'none',
            '@media screen and (max-width: 600px)': {
              display: 'block',
            },
          }
        : {
            display: 'block',
          }),
    }}
  />
);

export default OriginalSpacer;
