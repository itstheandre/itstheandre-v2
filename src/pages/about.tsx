import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorMode,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { AboutWrapper, LetsWork } from "../components";
import { myIcons } from "../Icons";
import { ReactIcon } from "../Icons/React.icon";
import { TTMonoBold, TTRegBold } from "../theme/utils/fonts";

type TechUsed = "all" | "frontend" | "backend" | "lib";

export default function About() {
  const { colorMode } = useColorMode();
  const [techUsed, setTechUsed] = useState<TechUsed>("all");

  const greetings = colorMode === "dark" ? "Hello world" : "My eyes!*";
  return (
    <>
      <Box h="calc(100vh - 96px)" zIndex="-1" pos="absolute" w="100%" top="24">
        <Heading
          fontSize="120px"
          color={colorMode === "dark" ? "gray.700" : "gray.200"}
          lineHeight="90%"
        >
          {greetings}{" "}
        </Heading>
      </Box>
      <Flex
        direction="column"
        alignItems="flex-start"
        height="80vh"
        justify="flex-end"
      >
        <Heading
          as="h2"
          textAlign="left"
          fontFamily={TTRegBold}
          fontSize={{ base: "24px" }}
          mb="6"
        >
          My name is Andre and I am a full stack developer with a previous
          career in business, that allows me to translate business needs to the
          technology world.
        </Heading>
        <Text>
          Purus maecenas consequat, venenatis, iaculis. Diam ut enim scelerisque
          id sit massa. Eu morbi elementum in augue a, nisl donec. Ultricies ut
          fermentum libero velit volutpat, placerat massa
        </Text>
        <HStack spacing="6" mt="6">
          <ReactIcon w="5" h="5" />
          <ReactIcon w="5" h="5" />
        </HStack>
      </Flex>
      <HStack
        mt="40"
        borderColor={colorMode === "dark" ? "white" : "gray.900"}
        py="8"
        borderBottomWidth="1px"
        borderTopWidth="1px"
      >
        <VStack spacing="8">
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
        </VStack>
      </HStack>
      <Box mt="40">
        <Heading
          as="h4"
          fontSize="5"
          textAlign="center"
          fontFamily={TTMonoBold}
          mb="2"
        >
          Technologies
        </Heading>
        <Text fontSize="4" textAlign="center">
          Here are some technologies that I’ve worked with and have been trying
          to master
        </Text>
      </Box>
      <Flex mt={12} justifyContent="space-between" fontSize="0">
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
      <LetsWork />
    </>
  );
}
