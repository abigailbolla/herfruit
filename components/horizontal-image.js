import {
  Box,
  Heading,
  AspectRatio,
  Center,
  Button,
  Icon,
  HStack,
  Flex,
  Text,
  LinkBox,
  useBreakpointValue,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export default function HorizontalImage() {
  return (
    <Grid templateColumns="100%" templateRows="100%" alignItems="center">
      <Box gridColumn="1" gridRow="1">
          {useBreakpointValue({
            base: (
              <AspectRatio ratio={[3 / 4]}>
                <Image src={"/images/set.png"} objectFit="cover" layout="fill" />
              </AspectRatio>
            ),
            md: <AspectRatio ratio={[3 / 2]}><Image
            src={"/images/thin.png"}
            objectFit="cover"
            layout="fill"
          /></AspectRatio>
          })}
      </Box>

      <Box textAlign="center" gridColumn="1" gridRow="1" zIndex="1">
        <Heading size="3xl" color="white">
          Sets for when you're feeling matchy
        </Heading>

        <Link href="/">
          <HStack paddingTop="10px" justify="center">
            <Text textColor="white">Take me there</Text>

            <Icon as={BsArrowRight} w={5} h={5} color="white" />
          </HStack>
        </Link>
      </Box>
    </Grid>
  );
}
