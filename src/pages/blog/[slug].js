import matter from "gray-matter";
import readingTime from "reading-time";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { getAllPostSlugs, getPostData } from "../../lib/posts";
import Head from "next/head";
import { Project } from "../../components";
import { Box, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { Code } from "../../test/Code";
const components = { Project: Project };

export default function Posts({ source, frontMatter }) {
  const content = hydrate(source, { components });
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Box sx={{ variant: "containers.page" }}>
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
