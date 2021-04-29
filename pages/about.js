import { AspectRatio, Box, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Grid 
      templateColumns={["100%", null, null, "repeat(2, 1fr)"]}
      gap={50} 
      padding={["15px", null, "100px"]} 
      maxW="1500px" 
      marginX="auto"
      >
        <AspectRatio ratio={3/4}>
          <Image src="/images/malia.jpg" objectFit="cover"/>
        </AspectRatio>
        <VStack spacing="50px">
            <VStack alignItems="start">
                <Heading fontWeight="bold">
                    Malia Sine
                </Heading>
                <Text>
                  Malia Sine launched her label showcasing her one-of-a-kind wearable
                  art lovingly made by hand in 2020 at the age of 21 after returning
                  from Italy. She was inspired by the up and coming designers who
                  debuted their latest collections at Milan Fashion Week and knew that
                  was her calling.
                </Text>
            </VStack>
            <Text>
                Channeling the whimsical world she dreamed up as a
              child, her vision behind the brand is to create her very own fashion
              house full of couture-esque pieces while doing her best to honor
              Mother Earth. She wants to change the world of fashion by curating
              unique vintage pieces and deconstructing the materials to create a
              dreamy universe of sustainable opulence.
            </Text>
            <Text>
                Channeling the whimsical world she dreamed up as a
              child, her vision behind the brand is to create her very own fashion
              house full of couture-esque pieces while doing her best to honor
              Mother Earth. She wants to change the world of fashion by curating
              unique vintage pieces and deconstructing the materials to create a
              dreamy universe of sustainable opulence.
            </Text>
        </VStack>
      </Grid>
    </Layout>
  );
}
