import React from 'react';
import { Box, Text, Stack } from '@chakra-ui/react';
import PaginationItem from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const sibilingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  onPageChange,
  currentPage = 1,
  registersPerPage = 10,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - sibilingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + sibilingsCount, lastPage),
        )
      : [];

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>{currentPage * registersPerPage - registersPerPage + 1}</strong>{' '}
        -{' '}
        <strong>
          {currentPage * registersPerPage > totalCountOfRegisters
            ? totalCountOfRegisters
            : currentPage * registersPerPage}
        </strong>{' '}
        de <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + sibilingsCount && (
          <>
            <PaginationItem onClick={onPageChange} number={1} />
            {currentPage > 2 + sibilingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}
        {previousPages.length > 0 &&
          previousPages.map(page => (
            <PaginationItem onClick={onPageChange} number={page} key={page} />
          ))}
        <PaginationItem onClick={onPageChange} number={currentPage} isCurrent />
        {nextPages.length > 0 &&
          nextPages.map(page => (
            <PaginationItem onClick={onPageChange} number={page} key={page} />
          ))}
        {currentPage + sibilingsCount < lastPage && (
          <>
            {currentPage + 1 + sibilingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onClick={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
