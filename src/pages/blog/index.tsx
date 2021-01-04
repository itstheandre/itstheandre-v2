import {
  Box,
  Flex,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";
import { getSortedPosts } from "../../lib/posts";
import {
  Article,
  BodyWrapper,
  CommonText,
  NextLink,
  PageHeader,
  PageHero,
  PageIntro,
} from "../../components";
import Image from "next/image";

const BlogIndex = ({ allPostsData }) => {
  // console.log("allPostsData:", allPostsData);
  return (
    <>
      <PageHeader>
        <PageIntro>🤓 Blog</PageIntro>
        <PageHero>
          I like writing about <CommonText>code</CommonText>,{" "}
          <CommonText>business</CommonText>, and some other{" "}
          <CommonText>random stuff</CommonText>.
        </PageHero>
      </PageHeader>
      <BodyWrapper>
        <Wrap spacing="6">
          {allPostsData.map((el) => {
            return (
              <WrapItem>
                <Article key={el.slug} {...el} href={el.slug} />
              </WrapItem>
            );
          })}
        </Wrap>
      </BodyWrapper>
      <Box my="20em">
        <Flex
          justifyContent="center"
          fontSize={24}
          alignItems="center"
          direction="column"
          mt="5"
        >
          <Text>🤔</Text>
          <Heading textAlign="center" w="50%">
            Like what you read?
          </Heading>
          <Heading textAlign="center">
            You should check{" "}
            <Text fontWeight="500" as="span">
              <NextLink
                href="/work"
                cursor="pointer"
                className="strokerText stroke"
              >
                what I've been working on
              </NextLink>{" "}
            </Text>
          </Heading>
        </Flex>
      </Box>
    </>
  );
};
export default BlogIndex;

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
