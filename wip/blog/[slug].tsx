// import {
//   AspectRatio,
//   Box,
//   Flex,
//   Heading,
//   Text,
//   useColorMode,
// } from "@chakra-ui/react";
// import matter from "gray-matter";
// import hydrate from "next-mdx-remote/hydrate";
// import renderToString from "next-mdx-remote/render-to-string";
// import Head from "next/head";
// import Image from "next/image";
// import readingTime from "reading-time";
// import {
//   BodyWrapper,
//   CommonText,
//   NextLink,
//   PageHero,
//   PageIntro,
//   Project,
// } from "../../src/components";
// import { getAllPostSlugs, getPostData } from "../../src/lib/posts";
// import { IPost, IProject } from "../../src/shared/types";
// const components = { Project: Project };

// interface SlugProps {
//   source: string;
//   frontMatter: IPost;
// }

// export default function Posts({ source, frontMatter }: SlugProps) {
//   const { colorMode } = useColorMode();
//   const color = colorMode === "dark" ? "gray.800" : "gray.50";
//   const content = hydrate(source, { components });
//   return (
//     <>
//       <Head>
//         <title>{frontMatter.title}</title>
//       </Head>
//       <AspectRatio
//         w="100%"
//         ratio={1232 / 500}
//         borderRadius="10px"
//         overflow="hidden"
//       >
//         {/* <div /> */}
//         <Box h="100%" w="100%" overflow="hidden">
//           <Image
//             src={frontMatter.banner}
//             objectFit="cover"
//             width={1232}
//             height={500}
//           />
//           <Flex
//             bg={color}
//             height="100%"
//             width="100%"
//             pos="absolute"
//             opacity="0.8"
//             justify="start"
//             align="center"
//           >
//             <BodyWrapper>
//               <PageIntro>{frontMatter.time}</PageIntro>
//               <PageHero>{frontMatter.title}</PageHero>
//             </BodyWrapper>
//           </Flex>
//         </Box>
//       </AspectRatio>
//       <Box mt="20" mb="48" px="20rem">
//         {content}
//         <Heading as="h3" mt="20">
//           As a good bye, I would like to leave you with this image, that I
//           believe it says it all:
//         </Heading>
//         <Box mt="10">
//           <Image
//             src={frontMatter.mainImg || frontMatter.banner}
//             layout="responsive"
//             height="70%"
//             width="100%"
//           />
//         </Box>
//       </Box>

//       <Flex justify="center">
//         <Heading as="h3" fontSize="5xl">
//           <NextLink href="/blog">
//             <CommonText>+ More articles</CommonText>
//           </NextLink>
//         </Heading>
//       </Flex>
//     </>
//   );
//   return (
//     <>
//       <Head>
//         <title>{frontMatter.title}</title>
//       </Head>
//       <Box>
//         <Box sx={{ mt: "4rem", textAlign: "center" }}>
//           <h1>{frontMatter.title}</h1>
//           <h4>{frontMatter.time}</h4>
//           <Text
//             sx={{
//               width: ["80%", "50%"],

//               mx: "auto",
//             }}
//           >
//             {frontMatter.author}
//             {" / "}
//             <span>{frontMatter.date}</span>
//           </Text>
//         </Box>
//         <Box sx={{ mt: "4rem" }}>
//           <Box>{content}</Box>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export async function getStaticPaths() {
//   const paths = getAllPostSlugs();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { data, content } = await getPostData(params.slug);
//   const mdxSource = await renderToString(content, {
//     components,
//     scope: data,
//   });

//   return {
//     props: {
//       source: mdxSource,
//       frontMatter: data,
//     },
//   };
// }

export {};
