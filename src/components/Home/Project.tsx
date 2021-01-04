import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { useIsLarge } from "../../hooks";
import { IProject } from "../../shared/types";
import { NextLink } from "../Common";

const ProjectBox = motion.custom(Box);
const Image = motion.custom(Box);
const Description = motion.custom(Text);

interface ProjectProps extends IProject {
  isLast?: boolean;
  slug?: string;
  name?: string;
}

const DescriptionVariants = {
  rest: {
    opacity: 0,
    duration: 0.275,
    type: "tween",
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.275,
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const Project: React.FC<ProjectProps> = ({
  isLast = false,
  name = "Savorly",
  slug,
  banner,
  category,
  ...rest
}) => {
  const { colorMode } = useColorMode();
  const isLarge = useIsLarge();

  return (
    <NextLink href={`/work/${slug}`} _hover={{ textDecor: "none" }}>
      <ProjectBox
        borderBottom={isLast ? "1px solid white" : "0"}
        borderColor={colorMode === "dark" ? "white" : "gray.900"}
        borderBottomWidth={isLast ? "1px" : "0"}
        borderTopWidth="1px"
        className="strokeWrapper"
        py={{ base: "3.5em", lg: "32" }}
        overflow="hidden"
        pos="relative"
        initial={false}
        // initial={isLarge ? "rest" : ""}
        // whileHover={isLarge ? "hover" : ""}
        // animate={isLarge ? "rest" : "hover"}
        whileHover="hover"
        animate="rest"
      >
        <Box
          mx={{ base: "0", lg: "7.75em", xl: "7em" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <Heading
            as="h4"
            className="stroke"
            fontSize={{ base: "4xl", lg: "5xl", xl: "6xl" }}
            mb={1}
          >
            {name}
          </Heading>

          {isLarge && (
            <>
              <Description size="sm" variants={DescriptionVariants}>
                {category}
              </Description>
              <Image
                pos="absolute"
                transformOrigin="center center"
                transform="rotateZ(-30deg)"
                right="-12%"
                top="20%"
                variants={DescriptionVariants}
              >
                <NextImage
                  src={
                    banner || "/images/projects/pioneers/pioneers-banner.png"
                  }
                  alt="Savorly"
                  height={366}
                  width={640}
                  quality={100}
                  layout="intrinsic"
                  className="projectImageHere"
                />
              </Image>
            </>
          )}
          {!isLarge && <Text size="sm">🛒 E-commerce website</Text>}
        </Box>
      </ProjectBox>
    </NextLink>
  );
};
