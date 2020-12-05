import {
  Box,
  ChakraProvider,
  Flex,
  Icon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { theme } from "../theme";
import { InfoIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { Layout, Main, Nav } from "../components/";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>André de Albuquerque</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <MDXProvider components={components}> */}
        <Component {...pageProps} />
        {/* </MDXProvider> */}
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
