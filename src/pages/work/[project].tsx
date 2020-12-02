import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import {
  getAllProjectSlugs,
  getProjectData,
  getSlugs,
} from "../../lib/projects";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { TLDR } from "../../components/MDXComps";

const components = {
  TLDR,
};

// xl -> 6 (3 de fora) 1, 2 , 1
// lg -> 6 (1 de foraa) 1, 6, 1
// md -> 4 (1 de fora) 1, 4, 1

interface IndividualProjectProps {
  [key: string]: any;
}
const IndividualProjects: NextPage<IndividualProjectProps> = ({ source }) => {
  console.log("source:", source);
  const content = hydrate(source, { components });
  return (
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
