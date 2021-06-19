import { Flex } from '@chakra-ui/react';
import Image from 'next/image';

interface AvatarProps {
  imgUrl: string;
  altText: string;
}

export function Avatar({ altText, imgUrl }: AvatarProps) {
  return (
    <Flex
      width="3rem"
      height="3rem"
      justifyContent='center'
      alignItems='center'
      className="mask"
    >
      <Image width={132} height={144} src={imgUrl} alt={altText} objectFit="cover" />
    </Flex>
  );
}
