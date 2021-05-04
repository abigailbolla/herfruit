import {
  Box,
  Grid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image,
  AspectRatio,
  VStack,
  Flex,
  HStack,
  Spacer,
  LinkBox,
} from "@chakra-ui/react";
import Layout from "../components/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";
import products from "./api/unsplash";
export default function ProductList() {
  console.log(products);
  let isBig = false;
  let count4 = 0;
  let count3 = 0;
  return (
    <Layout>
      <Breadcrumb separator={<ChevronRightIcon color="black" />} padding="25px">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/">New</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading align="center" size="xl" fontWeight="bold" paddingBottom="25px">
        New
      </Heading>

      <Grid
        maxW="2000px"
        marginX="auto"
        templateColumns={["repeat(2, 1fr)", null, "repeat(12, 1fr)"]}
        gap={["5px"]}
        rowGap="25px"
        paddingBottom="50px"
        paddingX="10px"
      >
        {(products.concat(products)).map((product, index) => {
          if (count4 == 4) {
            isBig = true;
          }
          if (isBig == true) {
            count3 = count3 + 1;
          }
          
          
          if (count3 == 4) {
              isBig = false
              count4 = 0
              count3 = 0
          }
          count4++;

          console.log(index, count3);
          return (
            <LinkBox gridColumn={[null, null, isBig ? "span 4" : "span 3"]} key={product.id}>
              <AspectRatio ratio={9 / 14}>
                <Image src={product.urls.full} />
              </AspectRatio>
              <VStack paddingTop="10px" align="start" spacing="0">
                <Heading size="md">{product.user.first_name}</Heading>
                <Heading size="md">$ {product.likes}</Heading>
              </VStack>
            </LinkBox>
          );
        })}
      </Grid>
    </Layout>
  );
}
