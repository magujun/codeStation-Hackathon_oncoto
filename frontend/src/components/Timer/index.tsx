import React, { memo } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Countdown from 'react-countdown';

const zeroPad = (num, places) => String(num).padStart(places, '0');

const renderer = ({ hours, minutes, seconds, completed }) => {
  return (
    <Box
      bg="rgba( 255, 255, 255, 0.25 )"
      boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
      backdropFilter="blur( 9.0px )"
      borderRadius="10px"
      border="1px solid rgba( 255, 255, 255, 0.18 );"
      position="fixed"
      top="120px"
      zIndex={10}
      right="30px"
      p={4}
    >
      <Text fontSize="1.5rem" zIndex={11} fontWeight="bold">
        {zeroPad(hours, 2)}:{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}
      </Text>
    </Box>
  );
};

export type TimerProps = {
  finishDate: Date | string | number;
  onTimeout: () => void;
};

export const Timer = memo(({ finishDate, onTimeout }: TimerProps) => {
  return (
    <Countdown renderer={renderer} date={finishDate} onComplete={onTimeout} />
  );
});
