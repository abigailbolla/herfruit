import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "url(/images/bg2.jpeg)",
          bgSize: "50%",
          fontFamily: `"itc-avant-garde-gothic-pro", Times New Roman, sans-serif`,
          fontWeight: "300",
        },
      },
    },
    components: {
      Text: {
        baseStyle: {
          color: "rgba(0,0,0,.6)"
        }
      },
      Heading: {
        baseStyle: {
          fontFamily: `"ivypresto-display", sans-serif`,
          fontWeight:"600",
          fontStyle: "italic"
        },
      },
      Button: {
        baseStyle: {
          fontFamily: `"itc-avant-garde-gothic-pro", sans-serif`,
          fontWeight: "300",
        },
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>herfruit</title>
        <link
          key="typekit"
          rel="stylesheet"
          href="https://use.typekit.net/mpt7kkx.css"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
