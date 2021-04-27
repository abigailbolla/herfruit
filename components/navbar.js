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
} from "@chakra-ui/react";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

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
        templateColumns={["1fr 125px 1fr"]}
        w="100%"
        justifyItems="center"
        paddingX="25px"
      >
        <HStack spacing="20px" justifySelf="start">
          <Button textColor="black" variant="link" size="md">
            <Link href="/product-list">New</Link>
          </Button>
          <Button textColor="black" variant="link" size="md">
            Shop
          </Button>
          <Button textColor="black" variant="link" size="md">
            About
          </Button>
        </HStack>

        <Box marginBottom="5%">
          <Link textColor="black" size="sm" href="/">
            <Image src="/images/logo.png" />
          </Link>
        </Box>

        <HStack spacing="20px" justifySelf="end">
          <IconButton
            aria-label="Search site"
            icon={<SearchIcon />}
            bgColor="transparent"
            _hover={{bgColor: "transparent"}}
          />
          <IconButton
            aria-label="Search site"
            icon={<FaShoppingBag/>}
            bgColor="transparent"
            _hover={{bgColor: "transparent"}}
          />
        </HStack>
      </Grid>
    </Box>
  );
}
