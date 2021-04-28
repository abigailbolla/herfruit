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
   ><Box
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
     />
     <Box
     gridRow="1"
     gridColumn="1"
     bgGradient="linear(to left, cyan.400, pink.400)"
     filter="blur(50px)"
     
     padding="100px"
     opacity=".3"
     w="100vw"
     h="100vw"
     borderRadius="50%"
     position="absolute"
     inset="0"
     padding="100px"
     zIndex="0"
     transformOrigin="bottom center"
     transform="translateY(-60vw) scale(4)"
     />
     
      <Grid
        gridRow="1"
        gridColumn="1"
        className="image and text overlap"
        templateColumns={"100%"}
        templateRows={"1fr"}
        marginBottom="100px"
        marginTop="75px"
        zIndex="2"
      >
        
        <Grid
          className="images"
          gridRow="1"
          gridColumn="1"
          templateColumns={["1fr 2fr 1fr"]}
          gap={["15px", null, null, "50px"]}
          alignItems="center"
          w="100%"
          maxW="1800px"
          marginX="auto"
        >
          <GradientImage
          image="/images/hands.png"
          ratio={9/20}
          borderTopLeftRadius="calc(100vw/5)"
          />
  
          <GradientImage
          image="/images/hero.png"
          borderTopRadius="calc(100vw/4)"
          />
  
          <GradientImage 
          image="/images/stool.png"
          ratio={9/20}
          borderTopRightRadius="calc(100vw/5)"
          />
        </Grid>
        
        <VStack
          alignSelf="center"
          paddingTop={["15px", null, "0px"]}
          spacing="25px"
          gridRow={[null, null, "1"]}
          gridColumn={[null, null, "1"]}
          zIndex="2"
          textAlign="center"
          maxW="500px"
          marginX="auto"
        >
          <Heading 
            size="4xl" 
            fontWeight="bold" 
            textColor="black">
              Tight knit
          </Heading>
          
          <Button 
          borderRadius="0px"
          bgGradient="linear(to right, pink.100, purple.100, cyan.100)"
          bgGradient="opacity .2"
          textColor="white"
          bgColor="black"
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
