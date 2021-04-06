import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NextImage from "next/image";
import {
  AboutTechnologies,
  AboutWrapper,
  LetsWork,
  NextLink,
} from "../components";
import { useIsMedium } from "../hooks";
import { GithubIcon, LinkedinIcon } from "../Icons";

export default function About() {
  const { colorMode } = useColorMode();
  const medium = useIsMedium();

  const greetings =
    colorMode === "dark" ? "👋 Hello world" : "👁️ My eyes, my eyes!*";
  return (
    <>
      <Flex
        mt="6"
        minH="calc(100vh - 120px)"
        // bg="brand.main"
        align="center"
        dir="column"
        mb={{ base: "8em", lg: "10em" }}
        pos="relative"
      >
        <Box zIndex="-1" h="100%" pos="absolute" w="100%">
          <Box h="100%">
            <NextImage
              src="/images/about/me.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </Box>
          <Box
            h="100%"
            w="100%"
            bg={colorMode === "dark" ? "gray.800" : "gray.50"}
            position="absolute"
            top="0"
            opacity="0.8"
          />
        </Box>
        <Box px={{ lg: "8em", xl: "7em" }}>
          <Heading
            as="h5"
            variant="mono"
            fontSize={{ base: "md", sm: "xl", xl: "2xl" }}
            mb={1}
            zIndex="1"
          >
            {greetings}
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl", xl: "6xl" }}
            zIndex="1"
          >
            It's the André here
          </Heading>
          <HStack spacing="6" mt="8" zIndex="1">
            <NextLink
              referrerPolicy="no-referrer"
              isExternal
              href="https://linkedin.com/in/itstheandre"
            >
              <LinkedinIcon w="5" h="5" />
            </NextLink>
            <NextLink
              referrerPolicy="no-referrer"
              isExternal
              href="https://github.com/itstheandre"
            >
              <GithubIcon w="5" h="5" />
            </NextLink>
          </HStack>
        </Box>
        {colorMode === "light" && (
          <Text px={{ lg: "8em", xl: "7em" }} pos="absolute" bottom="4">
            * as like ALL developers, I prefer Dark Mode because Light attracts
            bugs
          </Text>
        )}
      </Flex>
      <Box>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          mb={16}
        >
          My name is André and I am a full stack developer with a previous
          career in business, that allows me to translate business needs to the
          technology world
        </Heading>
        <SimpleGrid
          spacing={4}
          columns={{ base: 1, md: 2 }}
          gridTemplateAreas={{
            md: `"first third""second fourth"`,
          }}
        >
          <Text gridArea={{ md: "first" }}>
            I am a developer and a teacher from Lisbon 🇵🇹. I have an atypical
            path. I studied marketing and advertising and have worked in event
            management, business development and sales, building management, and
            also, at one point, at a bar. So yeah, not your usual developer
            story.
          </Text>
          <Text gridArea={{ md: "second" }}>
            Truth is I have always been more fascinated by technology and
            computers than anything else. From an early age I fell in love with
            computers and always wanted to, eventually, learn coding. Then in my
            business career I always felt frustrated because I could not build
            the ideas and projects I had in my mind.
          </Text>
          <Text gridArea={{ md: "third" }}>
            A few years later I have worked hard and turned myself into a
            developer, a freelancer, a tinkerer that keeps building new exciting
            ideas (at least for me). I have built projects for clients in the
            US, UK and Germany, in industries like e-commerce, finance and
            consulting.{" "}
          </Text>
          <Text gridArea={{ md: "fourth" }}>
            On top of all this, I am a teacher for Ironhack in its remote
            bootcamp where I try to help students break into the industry that
            has always fascinated me. I try to pass not only the skills but also
            the excitement for this life and promising career path
          </Text>
        </SimpleGrid>
      </Box>
      <Box
        mt="40"
        borderColor={colorMode === "dark" ? "white" : "gray.900"}
        py="8"
        borderBottomWidth="1px"
        borderTopWidth="1px"
        align="center"
        justify="center"
      >
        <Grid
          gridTemplateRows={{ base: "repeat(3, 1fr)", md: "1fr" }}
          gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          alignItems={{ md: "start" }}
          gridGap="8"
          px={{ xl: "7em" }}
          justifyContent="center"
        >
          <AboutWrapper emoji="🇳🇱" title="Interested in Amsterdam">
            Currently looking to move to my 4th European capital, after Berlin,
            Paris and Lisbon"
          </AboutWrapper>
          <AboutWrapper emoji="💻" title="1.5 years experience">
            Been coding for 1.5 years working and teaching code, while
            freelancing and always learning new technologies
          </AboutWrapper>
          <AboutWrapper title="Business and Marketing" emoji="📈">
            With a background in Marketing and experience in business in 3
            different countries with multiple startups in varied stages
          </AboutWrapper>
        </Grid>
      </Box>

      <AboutTechnologies />

      <LetsWork />
    </>
  );
}
