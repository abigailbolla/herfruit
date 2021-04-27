import { Grid, LinkBox, AspectRatio, Button, Text, Heading, HStack, Icon, Flex, Spacer} from "@chakra-ui/react"
import BlockWrap from "./blockwrap"
import Image from "next/image"
import GradientButton from "./gradient-button"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { BsArrowRight } from "react-icons/bs"

export default function ImageGrid(){
    return(
        <BlockWrap>
        <Grid
          templateColumns={["100%", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
          gap={25}
        >
          <LinkBox>
            <AspectRatio ratio={9 / 16}>
              <Image src="/images/whiteset.png" layout="fill" objectFit="cover" />
            </AspectRatio>
            <Flex paddingTop="15px">
              <Heading
              size="md"
              fontWeight="bold"
              >
                Sets
              </Heading>
              <Spacer/>
                <Icon as={BsArrowRight} w={5} h={5}/>
            </Flex>
          </LinkBox>

          <LinkBox>
            <AspectRatio ratio={9 / 16}>
              <Image src="/images/powerstance.png" layout="fill" objectFit="cover" />
            </AspectRatio>
            <Flex paddingTop="15px">
                <Heading
                size="md"
                fontWeight="bold"
                >
                    Tops
                </Heading>
                <Spacer/>
                <Icon as={BsArrowRight} w={5} h={5}/>
            </Flex>
          </LinkBox>

          <LinkBox>
            <AspectRatio ratio={9 / 16}>
              <Image src="/images/backs.png" layout="fill" objectFit="cover" />
            </AspectRatio>
            <Flex paddingTop="15px">
              <Heading
              size="md"
              fontWeight="bold"
              >
                Bottoms
              </Heading>
              <Spacer/>
                <Icon as={BsArrowRight} w={5} h={5}/>
            </Flex>
          </LinkBox>

          <LinkBox>
            <AspectRatio ratio={9 / 16}>
              <Image src="/images/betterpurse.png" layout="fill" objectFit="cover" />
            </AspectRatio>
            <Flex paddingTop="15px">
              <Heading
              size="md"
              fontWeight="bold"
              >
                Accessories
              </Heading>
              <Spacer/>
                <Icon as={BsArrowRight} w={5} h={5}/>
            </Flex>
          </LinkBox>
        </Grid>
      </BlockWrap>
    )
}