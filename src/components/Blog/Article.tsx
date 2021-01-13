import { Box, Heading, Link, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import { RightArrowIcon } from "../../Icons";
import { ArticleBox } from "../../theme";
import { EmojiWrapper, NextLink } from "../Common";

interface ArticleProps {
  title: string;
  banner: string;
  href: string;
  w?: string;
  time: string;
}

export const Article: FC<ArticleProps> = (
  props = {
    title: "Started from the bottom (of Europe) now we're here",
    href: "00_first",
    banner: "/images/blog/00/banner.png",
    w: "",
    time: "",
  }
) => {
  const link = `/blog/${props.href}`;
  return (
    <ArticleBox>
      <NextLink href={link}>
        <Box textAlign="left" w={{ base: "100%", md: "14", lg: 320 }}>
          <Box
            h="7em"
            w={props.w}
            overflow="hidden"
            borderRadius="10px"
            pos="relative"
          >
            <Image
              src={props.banner}
              width={465}
              height={310}
              objectFit="cover"
              layout="responsive"
            />
            <Box className="overlay" />
          </Box>

          <Box as="section" mt="4">
            <Text fontSize="md" color="gray.400">
              <EmojiWrapper>⏰</EmojiWrapper> {props.time}
            </Text>
            <Heading as="h3" fontSize="xl" variant="mono" lineHeight="8">
              {props.title}
            </Heading>
          </Box>
          <Box mt="6">
            <Heading as="h6" fontSize="md" className="read">
              <Link>
                Read <RightArrowIcon width="6" height="6" />
              </Link>
            </Heading>
          </Box>
        </Box>
      </NextLink>
    </ArticleBox>
  );
};

const Container = styled(motion.div)`
  position: relative;
  max-width: 200px;
  cursor: pointer;
`;

const SlashContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 0;
  opacity: 0;

  transform: translateY(-50%);

  svg {
    width: auto;
    height: 50px;
    object-fit: scale-down;
  }
`;
