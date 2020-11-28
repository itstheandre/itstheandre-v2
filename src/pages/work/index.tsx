import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { LetsWork, PageHeader, Project } from "../../components";
import { useIsMedium } from "../../hooks";
import { getSortedProjects } from "../../lib/projects";

export default function Work({ projects }) {
  console.log("props:", projects);
  const isMedium = useIsMedium();
  const [isSelected, setIsSelected] = useState(true);
  return (
    <>
      <Head>
        <title>My works</title>
      </Head>
      <PageHeader>
        <Heading variant="mono" as="h5" mb={1} fontSize={{ base: "1em" }}>
          Work 💻
        </Heading>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", sm: "3xl", lg: "5xl", xl: "6xl" }}
        >
          You can filter these projects by{" "}
          <Text cursor="pointer" as="span" className="strokerText stroke">
            front-end
          </Text>
          ,{" "}
          <Text cursor="pointer" as="span" className="strokerText stroke">
            back-end
          </Text>
          ,{" "}
          <Text cursor="pointer" as="span" className="strokerText stroke">
            apps
          </Text>
          , or just check{" "}
          <Text
            cursor="pointer"
            as="span"
            className={isSelected ? "" : "strokerText stroke"}
            color="brand.main"
          >
            all of them at once
          </Text>
        </Heading>
      </PageHeader>

      {projects.map((el, i, { length }) => {
        console.log("i:", i);
        console.log("length:", length);
        console.log(i === length - 1);
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
        <Button variant="outline" textAlign="center">
          Load more
        </Button>
      </Flex>
      <LetsWork h="100vh" />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getSortedProjects();
  console.log("projects:", projects);

  return {
    props: {
      projects,
    },
  };
};
