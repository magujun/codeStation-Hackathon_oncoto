import React from "react";
import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onClick: (page: number) => void;
}

export default function PaginationItem({
  number,
  isCurrent = false,
  onClick,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="blue.800"
        disabled
        _disabled={{
          bgColor: "gray.400",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="blue.800"
      color="white"
      _hover={{
        bgColor: "gray.400",
      }}
      _disabled={{
        bgColor: "gray.400",
        cursor: "default",
      }}
      onClick={() => onClick(number)}
    >
      {number}
    </Button>
  );
}
