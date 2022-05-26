import { Box } from '@chakra-ui/react';
import { VFC } from 'react';

type SpacerProps = {
  size: string;
  horizontal?: boolean;
};

const Spacer: VFC<SpacerProps> = ({ size, horizontal }) => (
  <Box
    style={
      horizontal
        ? {
            width: size,
            height: 'auto',
          }
        : { width: 'auto', height: size }
    }
  />
);
export default Spacer;
