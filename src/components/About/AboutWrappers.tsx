import { Flex, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { TTMonoBold } from "../../theme/utils/fonts";

interface AboutWrapperProps {
  emoji: string;
  title: string;
  children: ReactNode;
}

export function AboutWrapper({ emoji, title, children }: AboutWrapperProps) {
  return (
    <Flex
      direction="column"
      justify="center"
      textAlign={{ base: "center", md: "left" }}
    >
      <Text mb="2">{emoji}</Text>
      <Heading
        as="h4"
        fontSize="5"
        // textAlign="center"
        fontFamily={TTMonoBold}
        mb="2"
      >
        {title}
      </Heading>
      <Text
        fontSize="4"
        // textAlign="center"
      >
        {children}
      </Text>
    </Flex>
  );
}
