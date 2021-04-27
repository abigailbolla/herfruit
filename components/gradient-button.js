import { Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function GradientButton(props) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      role="group"
      bgSize="200%"
    >
      <Box
        bgGradient="linear(to right, cyan.100, purple.100, pink.100)"
        position="absolute"
        paddingBottom="100%"
        inset="0"
      />
      <Button
        w="100%"
        textColor="white"
        bgColor="black"
        borderRadius="0px"
        _hover={{ bg: "transparent", textColor: "purple.600" }}
        {...props}
      />
    </Box>
  );
}
