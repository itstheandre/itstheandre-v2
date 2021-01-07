import { Flex, Heading, Text } from "@chakra-ui/react";
import { NextLink } from "./Links";

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
      <Text fontWeight="500">
        <NextLink
          href="/contact"
          cursor="pointer"
          className="strokerText stroke"
        >
          fill this form
        </NextLink>{" "}
        or{" "}
        <NextLink
          href="mailto:code@itstheandre.com"
          cursor="pointer"
          className="strokerText stroke"
          isExternal
        >
          email me
        </NextLink>
      </Text>
      {/* <Text fontWeight="500" className="stroke strokerText" as="span">
        me@itstheandre.com
      </Text> */}
    </Heading>
  </Flex>
);
