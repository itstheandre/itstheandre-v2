import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { RightArrowIcon } from "../../Icons";
import { NextLink } from "../Common";

interface ArticleProps {
  title: string;
  banner: string;
  href: string;
}

export const Article = (
  props: ArticleProps = {
    title: "Started from the bottom (of Europe) now we're here",
    href: "00_first",
    banner: "/images/blog/00/banner.png",
  }
) => {
  const link = `/blog/${props.href}`;
  console.log("props:", props);
  return (
    <Box as="article" w={320}>
      <Box h="7em" overflow="hidden" borderRadius="10px">
        <Image
          src={props.banner}
          width={465}
          height={310}
          objectFit="cover"
          layout="responsive"
        />
      </Box>

      <Box as="section" mt="4">
        <Text fontSize="md">⏰ 15 minutes</Text>
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
            Read more <RightArrowIcon width="6" height="6" />
          </NextLink>
        </Heading>
      </Box>
    </Box>
  );
};
