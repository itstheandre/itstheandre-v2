import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import {
  getAllProjectSlugs,
  getProjectData,
  getSlugs,
} from "../../lib/projects";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { TLDR } from "../../components/MDXComps";
import { NextLink, PageHeader, PageHero, PageIntro } from "../../components";
import { TTMonoBold } from "../../theme/utils/fonts";
import NextImage from "next/image";

const components = {
  TLDR,
};

interface IndividualProjectProps {
  [key: string]: any;
}
const IndividualProjects: NextPage<IndividualProjectProps> = ({
  source,
  frontMatter,
}) => {
  console.log("frontMatter:", frontMatter);
  console.log("source:", source);
  const content = hydrate(source, { components });
  return (
    <Box>
      <Box mt="20">
        <PageIntro>{frontMatter.category}</PageIntro>
        <PageHero>{frontMatter.shortDescription}</PageHero>
        <Wrap spacing="3" mt="6" justify="left">
          {frontMatter.technologies.map((el) => (
            <WrapItem key={el}>
              <Badge _hover={{ cursor: "default" }}>{el}</Badge>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      <Box mt="20">
        <NextImage
          src={frontMatter.banner}
          layout="responsive"
          width={600}
          height={400}
          objectFit="cover"
        />
      </Box>
      <Grid gridTemplateColumns="1fr 1fr" mt="6">
        <GridItem>
          <Box>
            <Heading as="h6" mb="1" fontSize="sm" fontFamily={TTMonoBold}>
              Client
            </Heading>
            <NextLink href="https://savorly.us">Savorly</NextLink>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Heading as="h6" mb="1" fontSize="sm" fontFamily={TTMonoBold}>
              Team
            </Heading>
            <NextLink href="https://github.com">Dalina Weidinger</NextLink>
          </Box>
        </GridItem>
      </Grid>
      <Flex justify="center" mb="20" mt="10">
        <NextLink
          href="https://savorly.us"
          textDecor="none"
          _hover={{ textDecor: "none" }}
          referrerPolicy="no-referrer"
          isExternal
        >
          <Button variant="outline" textAlign="center">
            Check all Projects
          </Button>
        </NextLink>
      </Flex>
      <Box
        m="0 auto"
        w={{
          base: "100%",
          md: `calc(100% / 6 * 4)`,
          lg: "calc(100% / 8 * 6)",
          xl: "calc(100% / 12 * 6)",
        }}
      >
        {content}
      </Box>
      <Box textAlign="center" mt="20" mb="20">
        <NextLink href="/work" fontSize="3xl">
          <Heading className="stroke strokerText" as="h1">
            + More projects
          </Heading>
        </NextLink>
      </Box>
    </Box>
  );
};

export default IndividualProjects;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectSlugs();
  return {
    fallback: true,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postContent = getProjectData(params.project as string);

  const { data, content } = matter(postContent);
  console.log("data:", data);

  const mdxSource = await renderToString(content, {
    components,
    scope: data,
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};
