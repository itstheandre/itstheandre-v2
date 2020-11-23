import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Head from "next/head";
import { Project } from "../components";
import { useIsMedium } from "../hooks";
import { TTReg, TTRegBold } from "../theme/utils/fonts";

export default function Home() {
  const isMedium = useIsMedium();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        css={{ height: `calc(100vh - ${3 * 16 + 20}px)` }}
        direction="column"
        justifyContent="center"
        align="center"
      >
        <Box as="header" textAlign={!isMedium ? "center" : "start"}>
          <Heading variant="mono" as="h5" mb={1} fontSize={{ base: "1em" }}>
            Hello 👋
          </Heading>
          <Heading
            as="h2"
            fontWeight="bold"
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl", xl: "6xl" }}
          >
            I'm André and I'm a full stack developer. Code has become my life to
            the point that I write it, teach it and dream it
          </Heading>
        </Box>
      </Flex>
      <Project />
      <Project />
      <Project isLast={true} />
      <Flex mt={10} justifyContent="center">
        <Button variant="outline" textAlign="center">
          Check all Projects
        </Button>
      </Flex>
    </div>
  );
}
