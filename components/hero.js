import {
  AspectRatio,
  Box,
  Button,
  Grid,
  Heading,
  VStack,
} from "@chakra-ui/react";
import BlockWrap from "./blockwrap";
import Image from "next/image";
import GradientImage from "./gradient-image";

export default function Hero() {
  return (
    <Grid
      className="hero bg"
      templateColumns="100%"
      templateRows="1fr"
      position="relative"
      overflow="hidden"
    >
      <Box
        gridRow="1"
        gridColumn="1"
        bgColor="white"
        w="100vw"
        h="100vw"
        borderRadius="50%"
        position="absolute"
        inset="0"
        padding="100px"
        zIndex="1"
        transformOrigin="bottom center"
        transform="translateY(-60vw) scale(3)"
        boxShadow="md"
      />

      <Grid
        gridRow="1"
        gridColumn="1"
        className="image and text overlap"
        templateColumns={"100%"}
        templateRows={"1fr"}
        marginBottom={["25px", null, "75px"]}
        marginTop={["0px", null, "75px"]}
        zIndex="2"
      >
        <Grid
          className="images"
          gridRow="1"
          gridColumn="1"
          templateColumns={[null, null, "1fr 2fr 1fr"]}
          templateRows={["1fr", null, "auto"]}
          gap={["15px", null, null, "50px"]}
          alignItems="center"
          w="100%"
          maxW="1800px"
          marginX="auto"
          paddingX={["0px", null, "10px"]}
        >
          <Box display={["none", null, "block"]}>
            <GradientImage
              image="/images/hands.png"
              ratio={[3 / 4, null, 9 / 20]}
              borderTopLeftRadius="calc(100vw/5)"
            />
          </Box>

          <Box>
            <GradientImage
              image="/images/hero.png"
              borderTopRadius={["0px", null, "calc(100vw/4)"]}
            />
          </Box>

          <Box display={["none", null, "block"]}>
            <GradientImage
              image="/images/stool.png"
              ratio={[3 / 4, null, 9 / 20]}
              borderTopRightRadius="calc(100vw/5)"
            />
          </Box>
        </Grid>

        <VStack
          alignSelf="center"
          paddingTop={["35px", null, "0px"]}
          spacing="25px"
          gridRow="1"
          gridColumn="1"
          zIndex="2"
          textAlign="center"
          maxW="500px"
          marginX="auto"
        >
          <Heading
            fontSize={["5xl", null, "7xl"]}
            fontWeight="bold"
            textColor="black"
          >
            You're the yee to my haw
          </Heading>

          <Button
            borderRadius="0px"
            size="lg"
            bgColor="black"
            bgGradient="linear(to right, pink.100, purple.100, cyan.100)"
            bgGradient="opacity .2"
            textColor="white"
            transition=""
            _hover={{
              bgGradient: "linear(to right, cyan.100, purple.100, pink.100)",
              textColor: "black",
            }}
          >
            Shop now
          </Button>
        </VStack>
      </Grid>
    </Grid>
  );
}
