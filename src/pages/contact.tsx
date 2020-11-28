import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { NextLink, PageHeader } from "../components";
import { TTMonoBold, TTRegBold } from "../theme/utils/fonts";

export default function Contact() {
  const { colorMode } = useColorMode();
  const { handleSubmit, errors, register } = useForm();
  return (
    <>
      <PageHeader>
        <Heading variant="mongo" as="h5" mb={1} fontSize={{ base: "1em" }}>
          Let's chat 💬
        </Heading>
        <Heading
          as="h2"
          fontSize={{ base: "3xl", sm: "4xl", lg: "5xl", xl: "6xl" }}
        >
          If you have a project for me, or just want to grab a coffee and talk
          about Christopher Nolan, feel free to{" "}
          <NextLink
            href="mailto:code@itstheandre.com"
            cursor="pointer"
            className="strokerText stroke"
            referrerPolicy="no-referrer"
            isExternal
          >
            email me
          </NextLink>{" "}
          or just fill out this form.
        </Heading>
      </PageHeader>
      <Box
        bg={colorMode === "dark" ? "gray.800" : "gray.50"}
        h="80vh"
        borderRadius="20px"
        p={8}
        mb={24}
      >
        <FormControl id="name" fontFamily={TTMonoBold}>
          <FormLabel>👋 What's your name?</FormLabel>
          <Input
            type="text"
            border="none"
            borderBottom="1px"
            borderRadius="0"
            py="2"
            px="0"
            mt="4"
            fontFamily={TTRegBold}
            borderBottomColor={colorMode === "dark" ? "white" : "gray.900"}
            placeholder="Tell me your name"
            _placeholder={{
              color: colorMode === "dark" ? "gray.600" : "gray.300",
              textAlign: "left",
              fontSize: "20px",
            }}
          />
        </FormControl>
        <FormControl id="name" fontFamily={TTMonoBold} mt="3.5em">
          <FormLabel>💌 How can I reach out to you?</FormLabel>
          <Input
            type="text"
            border="none"
            borderBottom="1px"
            borderRadius="0"
            py="2"
            px="0"
            mt="4"
            fontFamily={TTRegBold}
            borderBottomColor={colorMode === "dark" ? "white" : "gray.900"}
            placeholder="Type your email here"
            _placeholder={{
              color: colorMode === "dark" ? "gray.600" : "gray.300",
              textAlign: "left",
              fontSize: "20px",
            }}
          />
        </FormControl>
        <FormControl id="name" fontFamily={TTMonoBold} mt="3.5em">
          <FormLabel>💬 What's your message?</FormLabel>
          <Input
            type="text"
            border="none"
            borderBottom="1px"
            borderRadius="0"
            py="2"
            px="0"
            mt="4"
            fontFamily={TTRegBold}
            color="white"
            borderBottomColor={colorMode === "dark" ? "white" : "gray.900"}
            placeholder="Write what you want here"
            _placeholder={{
              color: colorMode === "dark" ? "gray.600" : "gray.300",
              textAlign: "left",
              fontSize: "20px",
            }}
          />
        </FormControl>
        <Flex mt={16} dir="column" justify="center">
          <Button variant="outline">Send message</Button>
        </Flex>
      </Box>
    </>
  );
}
