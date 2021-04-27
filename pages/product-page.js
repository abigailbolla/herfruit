import Layout from "../components/layout";
import {
  VStack,
  Grid,
  Button,
  Box,
  AspectRatio,
  Flex,
  Heading,
  Text,
  HStack,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  LinkBox,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import BlockWrap from "../components/blockwrap";
import { FaFlagUsa } from "react-icons/fa";
import { RiLeafLine } from "react-icons/ri";
import GradientButton from "../components/gradient-button";

export default function ProductPage() {
  const benefits = [
    {
      heading: "One of a kind",
      icon: null,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      heading: "Handmade",
      icon: null,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      heading: "Eco-friendly",
      icon: RiLeafLine,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      heading: "Made in America",
      icon: FaFlagUsa,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
  const images = [
    {
      src: "/images/zero/sitting.png",
    },
    {
      src: "/images/zero/body.png",
    },
    {
      src: "/images/zero/fullbody.png",
    },
  ];
  const [featuredImage, setFeaturedImage] = useState(images[0].src)
  return (
    <Layout>
      <Head>
        <title>Product Page</title>
      </Head>
      <Grid
        templateColumns="2fr 1.5fr"
        gap={75}
        maxW="1160px"
        marginX="auto"
        marginTop="100px"
      >
        <Grid templateColumns="1fr 9fr" gap={25}>
          <VStack>
            {images.map((image) => (
              <Button w="50px" h="60px" padding="0" 
              onClick={
                function(){
                  setFeaturedImage(image.src)
                }
              }>
                <Image
                  src={image.src}
                  width="50px"
                  height="60px"
                  objectFit="cover"
                />
              </Button>
            ))}
          </VStack>

          <Box w="500px">
            <AspectRatio ratio={3 / 4}>
              <Image src={featuredImage} layout="fill" objectFit="cover" />
            </AspectRatio>
          </Box>
        </Grid>

        <VStack align="left" spacing="20px">
          <Flex justify="space-between">
            <Heading size="lg">Zero Waste Set</Heading>

            <Heading size="lg">$80</Heading>
          </Flex>

          <Text>
            Repurposed from plastic bedding cases, this is a one-of-a-kind piece
            featuring fabric scraps encased in plastic. Due to the elastic
            waistband and ties, this piece can fit a US size XS-M
          </Text>
          <GradientButton size="lg">
            Add to cart
          </GradientButton>

          <Accordion allowMultiple="true">
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Details
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Care
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Shipping
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Grid>

      <BlockWrap>
        <Grid templateColumns={["100%", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={50} textAlign="center">
          {benefits.map(function(benefit){
            return(
              <VStack>
                <Box borderRadius="100%" padding="15px" bgGradient="linear(to bottom right, cyan.100, purple.100, pink.100)">
                  <Icon
                  w={6}
                  h={6}
                  color="purple.600"
                  as={benefit.icon}/>
                </Box>
                <Heading>
                  {benefit.heading}
                </Heading>
                <Text>
                  {benefit.description}
                </Text>
              </VStack>
            )
          })}
        </Grid>
      </BlockWrap>

      <BlockWrap>
        <VStack spacing="25px">
          <Heading size="lg">You might like</Heading>
          <Grid templateColumns={["repeat(4, 1fr)"]} gap={25} w="100%" h="100%">
            <AspectRatio ratio={9 / 16}>
              <Image src="/images/stool.png" layout="fill" objectFit="cover" />
            </AspectRatio>
            <AspectRatio ratio={9 / 16}>
              <Image src="/images/sky.png" layout="fill" objectFit="cover" />
            </AspectRatio>
            <AspectRatio ratio={9 / 16}>
              <Image
                src="/images/juliaclose.png"
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
            <AspectRatio ratio={9 / 16}>
              <Image src="/images/white.png" layout="fill" objectFit="cover" />
            </AspectRatio>
          </Grid>
        </VStack>
      </BlockWrap>
    </Layout>
  );
}
