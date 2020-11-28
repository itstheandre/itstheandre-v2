import { Text, Flex, Heading } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { TTMonoBold } from "../../theme/utils/fonts";

interface AboutWrapperProps {
  emoji: string;
  title: string;
  children: ReactNode;
}

export function AboutWrapper({ emoji, title, children }: AboutWrapperProps) {
  return (
    <Flex direction="column">
      <Text textAlign="center" mb="2">
        {emoji}
      </Text>
      <Heading
        as="h4"
        fontSize="5"
        textAlign="center"
        fontFamily={TTMonoBold}
        mb="2"
      >
        {title}
      </Heading>
      <Text fontSize="4" textAlign="center">
        {children}
      </Text>
    </Flex>
  );
}
