import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  LetsWork,
  PageHeader,
  PageHero,
  PageIntro,
  Project,
} from "../../components";
import { useIsMedium } from "../../hooks";
import { getSortedProjects } from "../../lib/projects";
import { IProject } from "../../shared/types";

type Projects = "frontend" | "backend" | "apps" | "all";

export default function Work({ projects }: { projects: IProject[] }) {
  const isMedium = useIsMedium();
  const [isSelected, setIsSelected] = useState(true);
  const [selected, setSelected] = useState<Projects>("all");
  return (
    <>
      <Head>
        <title>My works</title>
      </Head>
      <PageHeader>
        <PageIntro>Work 💻</PageIntro>
        <PageHero>
          You can filter these projects by{" "}
          <Text
            cursor="pointer"
            as="span"
            onClick={() => setSelected("frontend")}
            className={selected === "frontend" ? "" : "strokerText stroke"}
            color={selected === "frontend" ? "brand.main" : ""}
          >
            front-end
          </Text>
          ,{" "}
          <Text
            cursor="pointer"
            as="span"
            onClick={() => setSelected("backend")}
            className={selected === "backend" ? "" : "strokerText stroke"}
            color={selected === "backend" ? "brand.main" : ""}
          >
            back-end
          </Text>
          ,{" "}
          <Text
            cursor="pointer"
            as="span"
            onClick={() => setSelected("apps")}
            className={selected === "apps" ? "" : "strokerText stroke"}
            color={selected === "apps" ? "brand.main" : ""}
          >
            apps
          </Text>
          , or just check{" "}
          <Text
            cursor="pointer"
            as="span"
            onClick={() => setSelected("all")}
            className={selected === "all" ? "" : "strokerText stroke"}
            color={selected === "all" ? "brand.main" : ""}
          >
            all of them at once
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
            {...el}
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

  return {
    props: {
      projects,
    },
  };
};
