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
import { MDXProvider } from "@mdx-js/react";

// const components = {
//   "p.inlineCode": (props) => (
//     <code style={{ backgroundColor: "lightgrey" }} {...props}></code>
//   ),
//   pre: ({ children: { props } }) => {
//     if (props.mdxType === "code") {
//       return (
//         <Code
//           codeString={props.children.trim()}
//           language={props.className && props.className.replace("language-", "")}
//           {...props}
//         />
//       );
//     }
//   },
// };

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        {/* <MDXProvider components={components}> */}
        <Component {...pageProps} />
        {/* </MDXProvider> */}
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
