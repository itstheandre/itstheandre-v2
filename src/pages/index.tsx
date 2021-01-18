import { Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import {
  LetsWork,
  NextLink,
  PageHeader,
  PageHero,
  PageIntro,
  Project,
} from "../components";
import { getSortedProjects } from "../lib/projects";
import { IPost, IProject } from "../shared/types";
import { MyStroke } from "../theme";

interface HomeProps {
  projects: IProject[];
  posts?: IPost[];
}

export default function Home({ projects, posts }: HomeProps) {
  console.log("PROCESS ENV NODE", process.env.NODE_ENV);
  return (
    <div>
      <Head>
        <title>André de Albuquerque</title>
      </Head>
      <PageHeader homePage>
        <PageIntro>Hello 👋</PageIntro>
        <PageHero>
          <NextLink href="/about">
            <Text as="span" className="strokerText stroke">
              I'm André
            </Text>{" "}
          </NextLink>
          and I am a full stack developer. I have an{" "}
          <Text textDecor="line-through" as="span">
            un
          </Text>
          healthy obsession with code, to the point that I am continuously{" "}
          {/* <MyStroke>tinkering</MyStroke>,{" "} */}
          {/* <NextLink href="/blog">
            <MyStroke>writing</MyStroke>
          </NextLink>
          , or{" "} */}
          <NextLink href="/work">
            <MyStroke>building</MyStroke>
          </NextLink>{" "}
          something for me or my clients.
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
        <NextLink href="/work" textDecor="none" _hover={{ textDecor: "none" }}>
          <Button variant="outline" textAlign="center">
            Check all Projects
          </Button>
        </NextLink>
      </Flex>

      {/* <Box as="section" mt="48">
        <Heading
          as="h2"
          variant="mono"
          textAlign="center"
          fontSize="4xl"
          mb="10"
        >
          Latest articles
        </Heading>
        <BlogWrapper posts={posts} isHome />
        <Flex mt={10} justifyContent="center">
          <NextLink
            href="/blog"
            textDecor="none"
            _hover={{ textDecor: "none" }}
          >
            <Button variant="outline" textAlign="center">
              Read them all
            </Button>
          </NextLink>
        </Flex>
      </Box> */}

      <LetsWork />
    </div>
  );
}

export async function getStaticProps() {
  const projects = getSortedProjects(3);
  // const posts = getSortedPosts(3);

  return {
    props: {
      projects,
      // posts,
    },
  };
}
