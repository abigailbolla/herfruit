import {
  ChakraProvider,
  Heading,
  Box,
  Flex,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <Flex direction="column" minH="100vh">
      <HStack
        textAlign="center"
        justifyContent="center"
        bgColor="black"
        w="100%"
      >
        <Text textColor="white" align="center" paddingY="10px">
          New styles are here
        </Text>
      </HStack>
      <NavBar />
      <Box justifySelf="flex-start" flexGrow="1" as="main">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}
