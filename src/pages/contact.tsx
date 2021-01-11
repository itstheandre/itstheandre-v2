import {
  Box,
  Button,
  createStandaloneToast,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useColorMode,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { sendForm } from "../service";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CustomToast,
  NextLink,
  PageHeader,
  PageHero,
  PageIntro,
} from "../components";
import { TTMonoBold, TTRegBold } from "../theme/utils/fonts";
import { defaultContactForm, IContactForm } from "../utils";
import validator from "validator";
import { useMediaQuery } from "@solx/use-media-query";

export default function Contact() {
  const { colorMode } = useColorMode();

  const myToast = createStandaloneToast({
    defaultOptions: {
      duration: 9000,
    },
  });

  const { handleSubmit, errors, register } = useForm<IContactForm>({
    defaultValues: { ...defaultContactForm },
  });

  async function post() {
    const { data } = await axios.post("/api/disc", { message: "stuff" });
    console.log(data);
  }

  const onSubmit = handleSubmit(async (e) => {
    const obj = await sendForm(e);
    if (obj.status === "error" && !obj.showError) {
      return;
    }
    return myToast({
      render: () => <CustomToast {...obj} />,
    });
  });
  return (
    <>
      <PageHeader>
        <PageIntro>Let's chat 💬</PageIntro>
        <PageHero>
          If you have a project for me, or just want chat and nerd about coding
          or cinema, feel free to{" "}
          <NextLink
            href="mailto:code@itstheandre.com"
            cursor="pointer"
            className="strokerText stroke"
            isExternal
          >
            email me
          </NextLink>{" "}
          or just fill out this form.
        </PageHero>
      </PageHeader>

      <Box
        bg={colorMode === "dark" ? "gray.800" : "gray.50"}
        minHeight="50vh"
        borderRadius="20px"
        p={{ base: 8, sm: 10, md: 16, lg: 20 }}
        mb={24}
        onSubmit={onSubmit}
        as="form"
        mx={{ lg: "7.75em", xl: "7em" }}
        autoComplete="off"
      >
        <FormControl
          id="name"
          fontFamily={TTMonoBold}
          isInvalid={Boolean(errors.name)}
        >
          <FormLabel>👋 What's your name?</FormLabel>
          <Input
            type="text"
            border="none"
            borderBottom="1px"
            borderRadius="0"
            py="2"
            pl="2"
            mt="4"
            fontFamily={TTRegBold}
            borderBottomColor={colorMode === "dark" ? "white" : "gray.900"}
            fontSize="20px"
            placeholder="Tell me your name"
            _placeholder={{
              color: colorMode === "dark" ? "gray.600" : "gray.300",
              textAlign: "left",
              fontSize: "20px",
            }}
            _focus={{ outline: "none" }}
            name="name"
            ref={register}
            // ref={register({
            //   // validate: (str) => (!str ? "This is wrong" : true),
            // })}
            // ref={register}
          />
          {/* <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage> */}
        </FormControl>
        <FormControl id="email" fontFamily={TTMonoBold} mt="3.5em">
          <FormLabel>💌 How can I reach out to you?</FormLabel>
          <Input
            border="none"
            borderBottom="1px"
            borderRadius="0"
            py="2"
            pl="2"
            mt="4"
            fontFamily={TTRegBold}
            borderBottomColor={colorMode === "dark" ? "white" : "gray.900"}
            fontSize="20px"
            _placeholder={{
              color: colorMode === "dark" ? "gray.600" : "gray.300",
              textAlign: "left",
              fontSize: "20px",
            }}
            _focus={{ outline: "none" }}
            ref={register}
            type="text"
            placeholder="Type your email here"
            autoComplete="off"
            name="email"
          />
        </FormControl>
        <FormControl id="message" fontFamily={TTMonoBold} mt="3.5em">
          <FormLabel>💬 What's your message?</FormLabel>
          <Input
            type="text"
            border="none"
            borderBottom="1px"
            borderRadius="0"
            py="2"
            pl="2"
            fontSize="20px"
            mt="4"
            fontFamily={TTRegBold}
            borderBottomColor={colorMode === "dark" ? "white" : "gray.900"}
            placeholder="Write what you want here"
            _placeholder={{
              color: colorMode === "dark" ? "gray.600" : "gray.300",
              textAlign: "left",
              fontSize: "20px",
            }}
            _active={{ bg: "none" }}
            _focus={{ outline: "none" }}
            ref={register}
            name="message"
          />
          {/* <Textarea
            type="text"
            border="none"
            borderBottom="1px"
            borderRadius="0"
            py="2"
            pl="2"
            fontSize="20px"
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
            _active={{ bg: "none" }}
            _focus={{ outline: "none" }}
            ref={register}
            name="message"
          /> */}
        </FormControl>
        <FormControl
          id="phone"
          opacity={0}
          position="absolute"
          top="0"
          left="0"
          height="0"
          w="0"
          zIndex="-1"
        >
          <FormLabel
            opacity={0}
            position="absolute"
            top="0"
            left="0"
            height="0"
            w="0"
            zIndex="-1"
          ></FormLabel>
          <Input
            type="text"
            name="phone"
            autoComplete="off"
            placeholder="Your phone here"
            opacity={0}
            position="absolute"
            top="0"
            left="0"
            height="0"
            w="0"
            zIndex="-1"
          />
        </FormControl>
        <FormControl
          id="meName"
          opacity={0}
          position="absolute"
          top="0"
          left="0"
          height="0"
          w="0"
          zIndex="-1"
        >
          <FormLabel
            opacity={0}
            position="absolute"
            top="0"
            left="0"
            height="0"
            w="0"
            zIndex="-1"
          ></FormLabel>
          <Input
            type="text"
            name="meName"
            autoComplete="off"
            placeholder="Your meName here"
            opacity={0}
            position="absolute"
            top="0"
            left="0"
            height="0"
            w="0"
            zIndex="-1"
          />
        </FormControl>
        <Flex mt={16} dir="column" justify="center">
          <Button variant="outline" type="submit">
            Send message
          </Button>
        </Flex>
      </Box>
      {/* </form> */}
    </>
  );
}
