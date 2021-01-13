import { Code } from "./Code/CodeComponent";
import {
  Code as ChakraCode,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { NextLink } from "../../../components";

export const mdxComponents = {
  "p.inlineCode": (props) => {
    const { colorMode } = useColorMode();
    const bg = colorMode === "dark" ? "gray.500" : "gray.300";
    return (
      <ChakraCode bg={bg} {...props} />
      // <code style={{ backgroundColor: "lightgrey" }} {...props}></code>
    );
  },
  // p: (props) => <p style={{ width: "100%" }} {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h5: (props) => <Heading as="h5" {...props} />,
  h3: (props) => (
    <Heading as="h3" {...props} mb="4" mt="10" fontSize={{ base: "md" }} />
  ),
  a: (props) => <NextLink textDecor="underline" {...props} />,
  h4: (props) => (
    <Heading as="h4" mb="4" mt="10" {...props} fontSize={{ base: "lg" }} />
  ),
  p: (props) => <Text mb="4" {...props} />,
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace("language-", "")}
          {...props}
        />
      );
    }
  },
};
