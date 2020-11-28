import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Head from "next/head";
import { LetsWork, Project } from "../components";
import { useIsMedium } from "../hooks";
import { getSortedPosts } from "../lib/posts";
import { TTReg, TTRegBold } from "../theme/utils/fonts";
import { PageHeader } from "../components";

export default function Home({ posts }) {
  console.log("posts:", posts);
  const isMedium = useIsMedium();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader homePage>
        <Heading variant="mono" as="h5" mb={1} fontSize={{ base: "1em" }}>
          Hello 👋
        </Heading>
        <Heading
          as="h2"
          fontSize={{ base: "3xl", sm: "4xl", lg: "5xl", xl: "6xl" }}
        >
          I'm André and I'm a full stack developer. Code has become my life to
          the point that{" "}
          <Text as="span" className="strokerText stroke">
            I write it
          </Text>
          ,{" "}
          <Text as="span" className="strokerText stroke">
            teach it
          </Text>{" "}
          , and{" "}
          <Text as="span" className="strokerText stroke">
            dream it
          </Text>
        </Heading>
      </PageHeader>
      <Project />
      <Project />
      <Project isLast={true} />
      <Flex mt={10} justifyContent="center">
        <Button variant="outline" textAlign="center">
          Check all Projects
        </Button>
      </Flex>
      <LetsWork />
    </div>
  );
}

export async function getStaticProps() {
  const data = getSortedPosts();

  return {
    props: {
      posts: data,
    },
  };
}
