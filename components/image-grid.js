import {
  Grid,
  LinkBox,
  AspectRatio,
  Button,
  Text,
  Heading,
  HStack,
  Icon,
  Flex,
  Spacer,
  useBreakpointValue,
  useBreakpoint,
  Box,
} from "@chakra-ui/react";
import React from "react"
import BlockWrap from "./blockwrap";
import Image from "next/image";
import GradientButton from "./gradient-button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { BsArrowRight } from "react-icons/bs";


export default function ImageGrid() {
  const gridItems = [
    {
      image: "/images/whiteset.png",
      heading: "Sets",
    },
    {
      image: "/images/powerstance.png",
      heading: "Tops",
    },
    {
      image: "/images/backs.png",
      heading: "Bottoms",
    },
    {
      image: "/images/betterpurse.png",
      heading: "Accessories",
    },
  ];
   return <> {useBreakpointValue({
    base: <ImageGridMobile gridItems={gridItems}/>,
    lg: <ImageGridDesktop gridItems={gridItems}/>
  })}
  </>
  
}

export function ImageGridDesktop({ gridItems }) {
  return (
    <Grid
      marginX="auto"
      padding="100px"
      templateColumns={["repeat(2, 1fr)", null, "repeat(4, 1fr)"]}
      gap={25}
    >
      {gridItems.map((item) => (
        <LinkBox key={item.heading}>
          <AspectRatio ratio={10 / 15}>
            <Image src={item.image} layout="fill" objectFit="cover" />
          </AspectRatio>
          <Flex paddingTop="15px">
            <Heading size="md" fontWeight="bold">
              {item.heading}
            </Heading>
            <Spacer />
            <Icon as={BsArrowRight} w={5} h={5} />
          </Flex>
        </LinkBox>
      ))}
    </Grid>
  );
}

export function ImageGridMobile({ gridItems }) {
  return (
    <Box
    overflowX="scroll"
    >
      <Grid
      autoFlow="column"
      paddingY="50px"
      marginX="15px"
      templateColumns= {`repeat(${gridItems.length}, 60vw)`}
      >
        {gridItems.map((item) => (
          <LinkBox key={item.heading} paddingRight="15px">
            <AspectRatio ratio={10 / 15}>
              <Image src={item.image} layout="fill" objectFit="cover" />
            </AspectRatio>
            <Flex paddingTop="15px">
              <Heading size="md" fontWeight="bold">
                {item.heading}
              </Heading>
              <Spacer />
              <Icon as={BsArrowRight} w={5} h={5} />
            </Flex>
          </LinkBox>
      ))}
      </Grid>
    </Box>
  )
}
