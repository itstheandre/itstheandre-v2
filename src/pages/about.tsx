import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
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

  const greetings = colorMode === "dark" ? "Hello world" : "My eyes!*";
  return (
    <>
      <Box
        h={{
          base: "calc(80vh - 96px)",
          lg: "calc(60vh - 96px)",
          // xl: "calc(50vh - 96px)",
        }}
        zIndex="-1"
        pos="absolute"
        w="100%"
        top={{ base: "24", sm: "20", md: "40", lg: "20", xl: "10" }}
        mx={{ xl: "7em" }}
      >
        <Heading
          fontSize={{ base: "120px", md: "136px", lg: "144px" }}
          color={colorMode === "dark" ? "gray.700" : "gray.200"}
          lineHeight="90%"
        >
          {greetings}{" "}
        </Heading>
      </Box>
      <AboutHeader />
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
            fontSize={{ base: "xl", md: "2xl", lg:"4xl" }}
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
