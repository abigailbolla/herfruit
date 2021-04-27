import { AspectRatio, Center, Box} from "@chakra-ui/react";
export default function GradientBg() {
  return (
    <AspectRatio>
      <Center
        bgImage="url(../images/blue.png)"
        bgPosition="right"
        bgRepeat="no-repeat"
        
      >
          
        <Box textAlign="center"></Box>
      </Center>
    </AspectRatio>
  );
}
