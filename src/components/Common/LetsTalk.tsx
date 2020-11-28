import {
  Flex,
  Heading,
  LayoutProps,
  ResponsiveValue,
  Text,
} from "@chakra-ui/react";
import { ReactText } from "react";

interface LetsWorkProps {
  h?: string;
}

export const LetsWork = ({ h = "80vh" }: LetsWorkProps) => (
  <Flex
    justifyContent="center"
    fontSize={24}
    alignItems="center"
    direction="column"
    h={h}
    mt="5"
  >
    <Text>💬</Text>
    <Heading textAlign="center">
      Let's work together
      <br />
      <Text fontWeight="500" className="stroke strokerText" as="span">
        me@itstheandre.com
      </Text>
    </Heading>
  </Flex>
);
