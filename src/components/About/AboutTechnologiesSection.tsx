import { Badge, Box, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import { MyIcons, TechUsed } from "../../Icons";
import { TTMonoBold } from "../../theme/utils/fonts";

export const AboutTechnologies = () => {
  const [techUsed, setTechUsed] = useState<TechUsed>("all");

  return (
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
          Here are some technologies that I’ve worked with and have been trying
          to master
        </Text>
      </Box>
      <Wrap
        mt={12}
        justify="center"
        ml={{ md: "auto" }}
        mr={{ md: "auto" }}
        w={{ md: "60%" }}
        spacing="18px"
        fontSize="0"
      >
        <WrapItem>
          <Badge
            d="flex"
            variant={techUsed === "all" ? "selected" : "unselected"}
            onClick={() => setTechUsed("all")}
          >
            All
          </Badge>
        </WrapItem>
        <WrapItem>
          <Badge
            d="flex"
            variant={techUsed === "frontend" ? "selected" : "unselected"}
            onClick={() => setTechUsed("frontend")}
          >
            Front-End
          </Badge>
        </WrapItem>
        <WrapItem>
          <Badge
            d="flex"
            variant={techUsed === "backend" ? "selected" : "unselected"}
            onClick={() => setTechUsed("backend")}
          >
            Back-End
          </Badge>
        </WrapItem>
        <WrapItem>
          <Badge
            d="flex"
            variant={techUsed === "framework" ? "selected" : "unselected"}
            onClick={() => setTechUsed("framework")}
          >
            Framework
          </Badge>
        </WrapItem>
        <WrapItem>
          <Badge
            d="flex"
            variant={techUsed === "lib" ? "selected" : "unselected"}
            onClick={() => setTechUsed("lib")}
          >
            Library
          </Badge>
        </WrapItem>
        <WrapItem>
          <Badge
            d="flex"
            variant={techUsed === "language" ? "selected" : "unselected"}
            onClick={() => setTechUsed("language")}
          >
            Language
          </Badge>
        </WrapItem>
      </Wrap>

      <Wrap spacing="24px" justify="center" mt={16}>
        {MyIcons.filter((el) =>
          techUsed === "all" ? true : el.techUsed.includes(techUsed)
        ).map(({ Icon, techUsed, ...rest }, i) => (
          <WrapItem key={i}>
            <Icon h="16" w="16" {...rest} />
          </WrapItem>
        ))}

        {/* <WrapItem>
          <GatsbyIcon h="16" w="16" />
        </WrapItem>

        <WrapItem>
          <ChakraIcon h="16" w="16" />
        </WrapItem>

        <WrapItem>
          <JsIcon h="16" w="16" />
        </WrapItem>

        <WrapItem>
          <TsIcon h="16" w="16" />
        </WrapItem>
        <WrapItem>
          <NextJsIcon h="16" w="16" />
        </WrapItem>
        <WrapItem>
          <ShopifyIcon h="16" w="16" />
        </WrapItem>
        <WrapItem>
          <NodeJsIcon h="16" w="16" />
        </WrapItem>
        <WrapItem>
          <MaterialUiIcon h="16" w="16" />
        </WrapItem>
        <WrapItem>
          <NestJsIcon h="16" w="16" />
        </WrapItem>
        <WrapItem>
          <GraphQLIcon h="16" w="16" />
        </WrapItem>
        <WrapItem>
          <P5Icon h="16" w="16" />
        </WrapItem>
        <WrapItem>
          <BootstrapIcon h="16" w="16" />
        </WrapItem>
        <WrapItem>
          <StyledComponentsIcon h="16" w="16" />
        </WrapItem>
        <WrapItem>
          <HTML5Icon h="16" w="16" />
        </WrapItem> */}
      </Wrap>
    </Box>
  );
};
