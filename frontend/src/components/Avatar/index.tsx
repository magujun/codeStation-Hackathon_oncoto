import { Flex, Avatar as ChakraAvatar } from '@chakra-ui/react';
import Image from 'next/image';

interface AvatarProps {
  imgUrl: string | undefined;
  altText: string | undefined;
  firstNameInitialLetter: string;
}

export function Avatar({ altText, imgUrl, firstNameInitialLetter }: AvatarProps) {
  return (
    <Flex
      width="3rem"
      height="3rem"
      justifyContent='center'
      alignItems='center'
      className="mask"
    >
      {imgUrl ? (
        <Image width={132} height={144} src={imgUrl} alt={altText} objectFit="cover" />
      ) : (
        <ChakraAvatar width={132} height={144} name={firstNameInitialLetter} />
      )}
    </Flex>
  );
}
