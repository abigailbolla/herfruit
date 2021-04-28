import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Button,
  Spacer,
  Image,
  Heading,
  Grid,
  IconButton,
  Text,
  AccordionButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";

export default function NavBar({ CompanyName }) {
  return (
    <Box
      position="sticky"
      zIndex="50"
      top="0"
      bgColor="white"
      paddingTop="10px"
      boxShadow="md"
    >
      <Grid
        templateColumns={["1fr 1fr 1fr", null, "1fr 125px 1fr"]}
        w="100%"
        justifyItems="center"
        paddingX="25px"
      >
        <HStack spacing="20px" justifySelf="start">
          <Button textColor="black" variant="link" size="md">
            <Link href="/product-list">
              New
            </Link>
          </Button>
          <Button textColor="black" variant="link" size="md">
            Shop
          </Button>
          <Button textColor="black" variant="link" size="md">
            <Link href="/about">
              About
            </Link>
          </Button>
        </HStack>

        <Box marginBottom="5%">
          <Link textColor="black" size="sm" href="/">
            <Image src="/images/logo.png" />
          </Link>
        </Box>

        <HStack justifySelf="end">
          <HStack spacing="0px">
            <IconButton
              aria-label="Search site"
              icon={<AiOutlineSearch/>}
              bgColor="transparent"
              _hover={{bgColor: "transparent"}}
            />
            <Button textColor="black" variant="link" size="md">
              Search
            </Button>
          </HStack>
          <HStack spacing="0px">
            <IconButton
              aria-label="Search site"
              icon={<AiOutlineShopping/>}
              bgColor="transparent"
              _hover={{bgColor: "transparent"}}
            />
            <Button textColor="black" variant="link" size="md">
              Bag
            </Button>
          </HStack>
        </HStack>
      </Grid>
    </Box>
  );
}
