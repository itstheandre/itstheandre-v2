import { Code } from "./Code/CodeComponent";
import { Code as ChakraCode } from "@chakra-ui/react";

export const mdxComponents = {
  "p.inlineCode": (props) => (
    <ChakraCode bg="gray.300" {...props} />
    // <code style={{ backgroundColor: "lightgrey" }} {...props}></code>
  ),
  p: (props) => <p style={{ width: "100%" }} {...props} />,
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
