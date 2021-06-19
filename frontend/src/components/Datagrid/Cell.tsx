import React, { ReactNode, memo } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

const align = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

type CellProps = {
  alignCell: 'center' | 'left' | 'right';
  padding: number;
  value: ReactNode;
} & BoxProps;

export const Cell = memo(({ alignCell, padding, value, ...props }: CellProps) => {
  return (
    <Box
      w="100%"
      h="3.75rem"
      borderRadius="5px"
      display="flex"
      alignItems="center"
      justifyContent={align[alignCell]}
      padding={padding}
      {...props}
    >
      {value}
    </Box>
  );
});
