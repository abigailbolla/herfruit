import {
  Heading,
  Grid,
  AspectRatio,
  Box,
  Flex,
  HStack,
  Text
} from "@chakra-ui/react";
import Image from "next/image";

export default function LogoGrid() {
  return (
    <Box paddingBottom="25px" maxW="1000px" marginX="auto" paddingX="25px">
      <Text textAlign="center" paddingBottom="25px" fontSize="xl" fontWeight="bold">
        Featured in
      </Text>
      <HStack justify="center" alignItems="center" spacing={["25px", null, null, "100px"]}>
          <Box>
            <Image
              src="/images/logos/thg.svg"
              objectFit="contain"
              width="1490px"
              height="500px"
            />
          </Box>

          <Box>
            <Image
              src="/images/logos/totem.svg"
              objectFit="contain"
              layout="intrinsic"
              width="1008px"
              height="500px"
            />
          </Box>

          <Box>
            <Image
              src="/images/logos/rival.svg"
              objectFit="contain"
              width="1008px"
              height="500px"
            />
          </Box>

          <Box>
            <Image
              src="/images/logos/75.svg"
              objectFit="contain"
              width="1008px"
              height="500px"
            />
          </Box>
      </HStack>
    </Box>
  );
}
