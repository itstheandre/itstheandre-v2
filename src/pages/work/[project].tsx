import { Badge, Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Head from "next/head";
import NextImage from "next/image";
import { useRouter } from "next/router";
import {
  CheckItOutButton,
  ClientTeam,
  DecoratedLink,
  EmojiWrapper,
  NextLink,
  PageHero,
  PageIntro,
  Project,
} from "../../components";
import { TLDR } from "../../components/MDXComps";
import { useIsMedium } from "../../hooks";
import { getAllProjectSlugs, getProjectData } from "../../lib/projects";
import { IProject } from "../../shared/types";

const components = {
  TLDR,
  Project,
  NextLink,
  EmojiWrapper,
  DecoratedLink,
};

interface IndividualProjectProps {
  source: string;
  frontMatter: IProject;
}
const IndividualProjects: NextPage<IndividualProjectProps> = ({
  source,
  frontMatter,
}) => {
  console.log("frontMatter:", frontMatter);
  const router = useRouter();

  const isMedium = useIsMedium();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const content = hydrate(source, { components });

  return (
    <>
      <Head>
        <title>André de Albuquerque - {frontMatter.category}</title>
      </Head>
      <Box>
        <Box>
          <Box mt="20" px={{ xl: "7em" }}>
            <PageIntro>{frontMatter.category}</PageIntro>
            <Box
              d={{ base: "block", md: "flex" }}
              justifyContent={{ base: "", md: "space-between" }}
            >
              <PageHero>{frontMatter.shortDescription}</PageHero>
              <ClientTeam {...frontMatter} d={{ base: "none", md: "block" }} />
              {/* {isMedium && <ClientTeam {...frontMatter} />} */}
            </Box>
            <Wrap spacing="3" mt="6" justify="left">
              {frontMatter.technologies.map((el) => (
                <WrapItem key={el}>
                  <Badge _hover={{ cursor: "default" }}>{el}</Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
          <Box mt="20" borderRadius="10px" overflow="hidden">
            <NextImage
              src={frontMatter.banner}
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
            />
          </Box>
          {/* {!isMedium && <ClientTeam {...frontMatter} />} */}
          <ClientTeam {...frontMatter} d={{ base: "block", md: "none" }} />
          <CheckItOutButton url={frontMatter.url} />
        </Box>
        <Box
          m="0 auto"
          w={{
            base: "100%",
            md: `calc(100% / ${6 / 4})`,
            lg: `calc(100% / ${8 / 6})`,
            xl: `calc(100% / ${12 / 6})`,
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
    </>
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
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data as IProject,
    },
  };
};
