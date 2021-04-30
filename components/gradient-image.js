import { Grid, Box, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";

export default function GradientImage({
  image,
  isLink,
  ratio = 3 / 4,
  borderRadius,
  borderTopRadius,
  borderBottomRadius,
  borderLeftRadius,
  borderRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
}) {
  return (
    <Grid
      templateColumns="100%"
      templateRows="1fr"
      overflow="hidden"
      borderRadius={borderRadius}
      borderTopRadius={borderTopRadius}
      borderBottomRadius={borderBottomRadius}
      borderLeftRadius={borderLeftRadius}
      borderRightRadius={borderRightRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      borderBottomRightRadius={borderBottomRightRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      zIndex="2"
      position="relative"
    >
      <Box
        zIndex="1"
        bgGradient="linear(to bottom right, cyan.400, transparent, purple.100, transparent, pink.400)"
        w="100%"
        h="100%"
        gridRow="1"
        gridColumn="1"
        opacity=".2"
        _hover={
          isLink && {
            opacity: "0",
          }
        }
        transition="opacity .5s ease-out"
      />
      {isLink && (
        <Box
          zIndex="1"
          bgGradient="linear(to bottom left, cyan.400, transparent, purple.100, transparent, pink.400)"
          w="100%"
          h="100%"
          gridRow="1"
          gridColumn="1"
          opacity="0"
          _hover={{
            opacity: ".2",
          }}
          transition="opacity .5s ease-out"
        />
      )}
      <AspectRatio ratio={ratio} gridRow="1" gridColumn="1"  zIndex="0">
        <Image src={image} layout="fill" objectFit="cover" />
      </AspectRatio>
    </Grid>
  );
}
