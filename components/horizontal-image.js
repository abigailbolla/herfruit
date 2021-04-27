import { Box, Heading, AspectRatio, Center, Button } from "@chakra-ui/react";

export default function HorizontalImage(){
    return(
        
        <AspectRatio ratio={16 / 9}>
        <Center bgImage="url(../images/thin.png)" bgPosition="center" bgSize="cover" width="100%">
        <Box textAlign="center">
       
       
        <Heading size="3xl" color="white">
            Sets for when you're feeling matchy
        </Heading>
        
        
        <Button colorScheme="white" variant="link" textColor="white" borderColor="white" marginTop="20px">
            Take me there
        </Button>
        
    
        </Box>
      </Center>
      </AspectRatio>
    )
}