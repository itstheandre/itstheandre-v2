import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { RightArrowIcon } from "../../Icons";
import { EmojiWrapper, NextLink } from "../Common";

interface ArticleProps {
  title: string;
  banner: string;
  href: string;
  w?: string;
}

export const Article: FC<ArticleProps> = (
  props = {
    title: "Started from the bottom (of Europe) now we're here",
    href: "00_first",
    banner: "/images/blog/00/banner.png",
    w: "",
  }
) => {
  const link = `/blog/${props.href}`;
  return (
    <Box
      as="article"
      textAlign="left"
      w={{ base: "100%", md: "14", lg: 320 }}
      className="here"
    >
      <Box h="7em" w={props.w} overflow="hidden" borderRadius="10px">
        <Image
          src={props.banner}
          width={465}
          height={310}
          objectFit="cover"
          layout="responsive"
        />
      </Box>

      <Box as="section" mt="4">
        <Text fontSize="md" color="gray.400">
          <EmojiWrapper>⏰</EmojiWrapper> 15 minutes
        </Text>
        <Heading as="h3" fontSize="xl" variant="mono" lineHeight="8">
          {props.title}
        </Heading>
      </Box>
      <Box mt="6">
        <Heading as="h6" fontSize="md">
          <NextLink
            href={link}
            _hover={{ borderBottom: "1px solid white", pb: "4" }}
          >
            Read <RightArrowIcon width="6" height="6" />
          </NextLink>
        </Heading>
      </Box>
    </Box>
  );
};
