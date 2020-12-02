import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Head from "next/head";
import {
  LetsWork,
  NextLink,
  PageHero,
  PageIntro,
  Project,
} from "../components";
import { useIsMedium } from "../hooks";
import { getSortedProjects } from "../lib/projects";
import { TTReg, TTRegBold } from "../theme/utils/fonts";
import { PageHeader } from "../components";

export default function Home({ projects }) {
  const isMedium = useIsMedium();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader homePage>
        <PageIntro>Hello 👋</PageIntro>
        <PageHero>
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
        </PageHero>
      </PageHeader>
      {projects.map((el, i, { length }) => {
        return (
          <Project
            key={el.slug}
            slug={el.slug}
            name={el.title}
            isLast={i === length - 1}
          />
        );
      })}

      <Flex mt={10} justifyContent="center">
        <NextLink href="/work" textDecor="none" _hover={{ textDecor: "none" }}>
          <Button variant="outline" textAlign="center">
            Check all Projects
          </Button>
        </NextLink>
      </Flex>
      <LetsWork />
    </div>
  );
}

export async function getStaticProps() {
  const projects = getSortedProjects();

  return {
    props: {
      projects,
    },
  };
}
