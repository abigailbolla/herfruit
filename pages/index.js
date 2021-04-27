import BlockWrap from "../components/blockwrap";
import GradientBg from "../components/gradient-bg";
import HorizontalImage from "../components/horizontal-image";
import Layout from "../components/layout";
import {
  Box,
  Grid,
  Heading,
  Image,
  VStack,
  Text,
  Button,
  AspectRatio,
  LinkBox,
} from "@chakra-ui/react";
import Hero from "../components/hero";
import ImageGrid from "../components/image-grid";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <HorizontalImage />
      <ImageGrid/>
    </Layout>
  );
}
