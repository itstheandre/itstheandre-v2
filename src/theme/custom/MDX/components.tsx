import { Code } from "./Code/CodeComponent";
import { Code as ChakraCode, Heading, Text } from "@chakra-ui/react";
import { NextLink } from "../../../components";

export const mdxComponents = {
  "p.inlineCode": (props) => (
    <ChakraCode bg="gray.300" {...props} />
    // <code style={{ backgroundColor: "lightgrey" }} {...props}></code>
  ),
  // p: (props) => <p style={{ width: "100%" }} {...props} />,
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
