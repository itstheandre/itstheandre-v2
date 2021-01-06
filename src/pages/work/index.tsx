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
import shallow from "zustand/shallow";
import { useIsMedium, useProjects } from "../../hooks";
import { getSortedProjects } from "../../lib/projects";
import { IProject, ProjectType } from "../../shared/types";

type WorkPageProject = ProjectType | "all";

export default function Work({ projects }: { projects: IProject[] }) {
  const isMedium = useIsMedium();
  const { showing, showMore, showLess, selected, setSelected } = useProjects();
  const [isSelected, setIsSelected] = useState(true);
  const isGrowing = showing <= projects.length;
  function addProjects() {
    let count = 2;
    if (showing + 2 >= projects.length) {
      count = 1;
    }
    showMore(count);
  }
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
            onClick={() => setSelected("app")}
            className={selected === "app" ? "" : "strokerText stroke"}
            color={selected === "app" ? "brand.main" : ""}
          >
            apps
          </Text>
          ,{" "}
          <Text
            cursor="pointer"
            as="span"
            onClick={() => setSelected("oss")}
            className={selected === "oss" ? "" : "strokerText stroke"}
            color={selected === "oss" ? "brand.main" : ""}
          >
            open source packages
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

      {projects
        .slice(0, showing)
        .filter((el) =>
          selected === "all" ? el.type.includes("") : el.type.includes(selected)
        )
        .map((el, i, { length }) => {
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
        <Button
          variant="outline"
          textAlign="center"
          onClick={() =>
            showing < projects.length ? addProjects() : showLess(3)
          }
        >
          {showing < projects.length ? "Load more" : "Show less"}
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
