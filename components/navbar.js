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
  Text,
  AccordionButton,
  useBreakpointValue,
  useDisclosure,
  ModalFocusScope,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineMenu,
} from "react-icons/ai";

export default function NavBar() {
  const pages = [
    {
      link: "/product-list",
      title: "New",
    },
    {
      link: "/",
      title: "Shop",
    },
    {
      link: "/about",
      title: "About",
    },
  ];
  const shopLinks = [
    {
      icon: <AiOutlineSearch />,
      title: "Search",
    },
    {
      icon: <AiOutlineShopping />,
      title: "Bag",
    },
  ];
  return (
    <>
      {useBreakpointValue({
        base: <NavBarMobile pages={pages} shopLinks={shopLinks} />,
        lg: <NavBarDesktop pages={pages} shopLinks={shopLinks} />,
      })}
    </>
  );
}

export function NavBarMobile({ pages, shopLinks }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box position="sticky" zIndex="50" top="0" bgColor="white" boxShadow="md">
      <Grid templateColumns={["1fr 125px 1fr"]}>
        <HStack>
          <IconButton
            onClick={onOpen}
            icon={<AiOutlineMenu />}
            justifySelf="start"
            alignSelf="center"
            bgColor="transparent"
            _hover={{ bgColor: "transparent" }}
          />
          <Modal
            size="full"
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="none"
            style={{
              justifyContent: "start",
              background: "red"
            }}
          >
            <ModalOverlay/>
            <ModalContent
            marginRight="auto"
            marginTop="0px"
            borderRadius="0px"
            maxW="75%">
              <ModalCloseButton/>
              <ModalHeader></ModalHeader>
              <ModalBody>
                <VStack alignItems="left">
                {pages.map((page) =>
                <Text key={page.title}
                fontSize="xl"
                textColor="black"
                >
                  <Link href={page.link} >{page.title}</Link>
                </Text>
                )}
                </VStack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </HStack>
        <Box marginBottom="5%" paddingTop="10px">
          <Link textColor="black" size="sm" href="/">
            <Image src="/images/logo.png" />
          </Link>
        </Box>
        <HStack justifySelf="end">
          {shopLinks.map((shopLink) => (
            <IconButton
              key={shopLink.title}
              aria-label="Search site"
              icon={shopLink.icon}
              bgColor="transparent"
              _hover={{ bgColor: "transparent" }}
            />
          ))}
        </HStack>
      </Grid>
    </Box>
  );
}

export function NavBarDesktop({ pages, shopLinks }) {
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
        templateColumns={["1fr 1fr 1fr", null, "1fr 125px 1fr"]}
        w="100%"
        justifyItems="center"
        paddingX="25px"
      >
        <HStack spacing="20px" justifySelf="start">
          {pages.map((page) => (
            <Button key={page.title} textColor="black" variant="link" size="md">
              <Link href={page.link}>{page.title}</Link>
            </Button>
          ))}
        </HStack>

        <Box marginBottom="5%">
          <Link textColor="black" size="sm" href="/">
            <Image src="/images/logo.png" />
          </Link>
        </Box>

        <HStack justifySelf="end">
          {shopLinks.map((shopLink) => (
            <HStack key={shopLink.title} spacing="0px">
              <IconButton
                aria-label="Search site"
                icon={shopLink.icon}
                bgColor="transparent"
                _hover={{ bgColor: "transparent" }}
              />
              <Button textColor="black" variant="link" size="md">
                {shopLink.title}
              </Button>
            </HStack>
          ))}
        </HStack>
      </Grid>
    </Box>
  );
}
