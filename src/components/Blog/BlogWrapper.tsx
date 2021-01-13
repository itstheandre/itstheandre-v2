import { SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import { IPost } from "../../shared/types";
import { BodyWrapper } from "../Common";
import { Article } from "./Article";

interface BlogWrapperProps {
  isHome?: boolean;
  posts: IPost[];
}

export const BlogWrapper: React.FC<BlogWrapperProps> = (props) => {
  const { posts, isHome = false } = props;
  return (
    <BodyWrapper>
      <SimpleGrid
        columns={{ base: 1, md: posts.length > 3 ? 3 : posts.length }}
        justifyItems={{ base: "center", md: isHome ? "center" : "flex-start" }}
        spacingX="6"
        spacingY="12"
      >
        {posts.map((el) => (
          <Article w="100%" key={el.slug} {...el} href={el.slug} />
        ))}
      </SimpleGrid>
    </BodyWrapper>
  );
};
