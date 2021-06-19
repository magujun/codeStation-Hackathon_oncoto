import React from 'react';
import { Image, Flex, Text } from '@chakra-ui/react';

type CardProps = {
  image: string;
  text: string;
};

export const Card = ({ image, text }: CardProps) => {
  return (
    <Flex width="100%" justifyContent="center" alignItems="center">
      <Flex
        height={300}
        width={350}
        flexDir="column"
        borderRadius="4px"
        overflow="hidden"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
      >
        <Image
          src={image}
          height={500}
          width="100%"
          objectFit="cover"
          objectPosition="center"
          bg="blue.200"
        />
        <Flex h="100%" w="100%" borderRadius="4px" p="6">
          <Flex w="100%" h="60px" alignItems="center" justifyContent="center">
            <Text fontSize="1.25rem" fontWeight="600">
              {text}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
