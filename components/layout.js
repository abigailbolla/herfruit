import { ChakraProvider, Head, Box, Flex } from "@chakra-ui/react"
import NavBar from "../components/navbar"
import Footer from "../components/footer"

export default function Layout({ children }) {
    return (
      <Flex direction="column"  minH="100vh">
          <NavBar/>
          <Box justifySelf="flex-start" flexGrow="1" as="main">{children}</Box>
        <Footer/>
      </Flex>
    )
  }