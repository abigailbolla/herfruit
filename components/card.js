import {
  LinkBox,
  Box,
  Image,
  VStack,
  Heading,
  Text,
  LinkOverlay,
} from "@chakra-ui/react";

export default function Card({ heading, text, image }) {
  return (
    <LinkBox>
      <Box
        borderTopRadius="50%"
        borderWidth="1.5px"
        borderColor="black"
        overflow="hidden"
        bgColor="transparent"
        _hover={{
          transform: "scale(1.015)",
        }}
        _active={{
          transform: "scale(.99)",
        }}
        transition="all .2s ease-out"
      >
        <Box paddingBottom="0px">
          <Image marginX="auto" src={image} />
        </Box>
       
      </Box>
    </LinkBox>
  );
}
