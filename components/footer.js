import {
  Grid,
  Heading,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import BlockWrap from "./blockwrap";

export default function Footer() {
  return (
    <Grid
      justifySelf="flex-end"
      templateColumns={["100%", null, "repeat(4, 1fr)"]}
      gap={["25px", "50px"]}
      padding="50px"
      bgColor="white"
    >
      <VStack align="start">
        <Text fontSize="lg">More herfruit this way</Text>
        <Text fontSize="sm">Join our email list</Text>
        <FormControl id="email">
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </VStack>

      <VStack align="start">
        <Text fontSize="lg">Need help?</Text>
        <VStack spacing="0px" fontSize="sm" align="start">
          <Text>Return Policy</Text>
          <Text>Shipping</Text>
          <Text>Contact</Text>
        </VStack>
      </VStack>

      <VStack align="start">
        <Text fontSize="lg">Follow us</Text>
        <VStack spacing="0px" fontSize="sm" align="start">
          <Text>Instagram</Text>
          <Text>Facebook</Text>
          <Text>Pinterest</Text>
        </VStack>
      </VStack>

      <VStack align="start">
        <Text fontSize="lg">Account</Text>
        <VStack spacing="0px" fontSize="sm" align="start">
          <Text>Login</Text>
          <Text>Wishlist</Text>
        </VStack>
      </VStack>
    </Grid>
  );
}
