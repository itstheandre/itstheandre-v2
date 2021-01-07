import * as React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { IPost } from "../../shared/types";
import { BodyWrapper } from "../Common";
import { Article } from "./Article";

interface BlogWrapperProps {
  isHome?: boolean;
  posts: IPost[];
}

export const BlogWrapper: React.FC<BlogWrapperProps> = (props) => {
  const { isHome, posts } = props;
  console.log("isHome:", isHome);
  const allPosts = isHome ? posts : [...posts, ...posts, ...posts];
  return (
    <BodyWrapper>
      <SimpleGrid
        columns={{ base: 1, md: allPosts.length > 3 ? 3 : allPosts.length }}
        justifyItems={{ base: "center", md: isHome ? "center" : "flex-start" }}
        spacingX="6"
        spacingY="12"
      >
        {allPosts.map((el) => (
          <Article w="100%" key={el.slug} {...el} href={el.slug} />
        ))}
      </SimpleGrid>
    </BodyWrapper>
  );
};
