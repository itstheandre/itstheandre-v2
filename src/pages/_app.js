import {
  Box,
  ChakraProvider,
  Flex,
  Icon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { theme } from "../theme";
import NextLink from "next/link";
import { Layout, Main, Nav } from "../components/";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
