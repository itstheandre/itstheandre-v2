import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useColorMode,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { AboutHeader, AboutWrapper, LetsWork } from "../components";
import { useIsMedium } from "../hooks";
import { myIcons } from "../Icons";
import { ReactIcon } from "../Icons/React.icon";
import { TTMonoBold } from "../theme/utils/fonts";

type TechUsed = "all" | "frontend" | "backend" | "lib";

export default function About() {
  const { colorMode } = useColorMode();
  const [techUsed, setTechUsed] = useState<TechUsed>("all");
  const medium = useIsMedium();

  const greetings =
    colorMode === "dark" ? "👋 Hello world" : "👁️ My eyes, my eyes!*";
  return (
    <>
      <Flex
        minH="calc(100vh - 96px)"
        bg="brand.main"
        align="center"
        dir="column"
        mb={{ base: "8em", lg: "10em" }}
      >
        <Box px={{ lg: "8em", xl: "7em" }}>
          <Heading
            as="h5"
            variant="mono"
            fontSize={{ base: "md", sm: "xl", xl: "2xl" }}
            mb={1}
          >
            {greetings}
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl", xl: "6xl" }}
          >
            It's the André here
          </Heading>
          <HStack spacing="6" mt="8">
            <ReactIcon w="5" h="5" />
            <ReactIcon w="5" h="5" />
          </HStack>
        </Box>
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
          <AboutWrapper emoji="🇳🇱" title="Living in Amsterdam">
            Currently living in my 4th European capital, after Berlin, Paris and
            Lisbon"
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
      <Box mt="40" w={{ md: "80%" }} ml={{ md: "auto" }} mr={{ md: "auto" }}>
        <Box>
          <Heading
            as="h4"
            fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
            textAlign="center"
            fontFamily={TTMonoBold}
            mb="2"
          >
            Technologies
          </Heading>
          <Text fontSize="4" textAlign="center">
            Here are some technologies that I’ve worked with and have been
            trying to master
          </Text>
        </Box>
        <Flex
          mt={12}
          ml={{ md: "auto" }}
          mr={{ md: "auto" }}
          w={{ md: "60%" }}
          justifyContent="space-between"
          fontSize="0"
        >
          <Badge
            d="flex"
            variant={techUsed === "all" ? "selected" : "unselected"}
            onClick={() => setTechUsed("all")}
          >
            All
          </Badge>
          <Badge
            d="flex"
            variant={techUsed === "frontend" ? "selected" : "unselected"}
            onClick={() => setTechUsed("frontend")}
          >
            Front-End
          </Badge>
          <Badge
            d="flex"
            variant={techUsed === "backend" ? "selected" : "unselected"}
            onClick={() => setTechUsed("backend")}
          >
            Back-End
          </Badge>
          <Badge
            d="flex"
            variant={techUsed === "lib" ? "selected" : "unselected"}
            onClick={() => setTechUsed("lib")}
          >
            Libraries
          </Badge>
        </Flex>
        <Wrap spacing="24px" justify="center" mt={16}>
          {myIcons.map((Comp, i) => (
            <WrapItem key={i}>
              <Comp h="16" w="16" />
            </WrapItem>
          ))}

          <WrapItem>
            <ReactIcon h="16" w="16" />
          </WrapItem>

          <WrapItem>
            <ReactIcon h="16" w="16" />
          </WrapItem>

          <WrapItem>
            <ReactIcon h="16" w="16" />
          </WrapItem>

          <WrapItem>
            <ReactIcon h="16" w="16" />
          </WrapItem>
          <WrapItem>
            <ReactIcon h="16" w="16" />
          </WrapItem>
          <WrapItem>
            <ReactIcon h="16" w="16" />
          </WrapItem>
          <WrapItem>
            <ReactIcon h="16" w="16" />
          </WrapItem>
        </Wrap>
      </Box>

      <LetsWork />
    </>
  );
}
