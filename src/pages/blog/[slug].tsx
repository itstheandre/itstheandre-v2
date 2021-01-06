import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Head from "next/head";
import Image from "next/image";
import readingTime from "reading-time";
import {
  BodyWrapper,
  CommonText,
  NextLink,
  PageHero,
  PageIntro,
  Project,
} from "../../components";
import { getAllPostSlugs, getPostData } from "../../lib/posts";
const components = { Project: Project };

export default function Posts({ source, frontMatter }) {
  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "gray.800" : "gray.50";
  const content = hydrate(source, { components });
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <AspectRatio w="100%" ratio={1232 / 416}>
        {/* <div /> */}
        <Box h="100%" w="100%" overflow="hidden">
          <Image
            src={frontMatter.banner}
            objectFit="cover"
            width={1232}
            height={416}
          />
          <Flex
            bg={color}
            height="100%"
            width="100%"
            pos="absolute"
            opacity="0.8"
            justify="start"
            align="center"
          >
            <BodyWrapper>
              <PageIntro>15 minutes</PageIntro>
              <PageHero>{frontMatter.title}</PageHero>
            </BodyWrapper>
          </Flex>
        </Box>
      </AspectRatio>
      <Box mt="20" mb="48"></Box>
      <Flex justify="center">
        <Heading as="h3" fontSize="5xl">
          <NextLink href="/blog">
            <CommonText>+ More articles</CommonText>
          </NextLink>
        </Heading>
      </Flex>
    </>
  );
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Box>
        <Box sx={{ mt: "4rem", textAlign: "center" }}>
          <h1>{frontMatter.title}</h1>
          <h4>{frontMatter.time}</h4>
          <Text
            sx={{
              width: ["80%", "50%"],

              mx: "auto",
            }}
          >
            {frontMatter.author}
            {" / "}
            <span>{frontMatter.date}</span>
          </Text>
        </Box>
        <Box sx={{ mt: "4rem" }}>
          <Box>{content}</Box>
        </Box>
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postContent = await getPostData(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
  });
  const { text } = readingTime(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: { ...data, time: text },
    },
  };
}
