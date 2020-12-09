import {
  Box,
  Button,
  createStandaloneToast,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  CustomToast,
  NextLink,
  PageHeader,
  PageHero,
  PageIntro,
} from "../components";
import { TTMonoBold, TTRegBold } from "../theme/utils/fonts";

export default function Contact() {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const myToast = createStandaloneToast({
    defaultOptions: {
      duration: 9000,
    },
  });

  const { handleSubmit, errors, register } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  console.log("errors:", errors);

  const onSubmit = handleSubmit((e) => {
    console.log("e:", e);
    myToast({
      render: () => <CustomToast status="success" />,
    });
  });
  return (
    <>
      <PageHeader>
        <PageIntro>Let's chat 💬</PageIntro>
        <PageHero>
          If you have a project for me, or just want to grab a coffee and talk
          about Christopher Nolan, feel free to{" "}
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
      {/* <form onSubmit={onSubmit}> */}
      <Box
        bg={colorMode === "dark" ? "gray.800" : "gray.50"}
        minHeight="80vh"
        borderRadius="20px"
        p={{ base: 8, sm: 10, md: 16, lg: 20 }}
        mb={24}
        onSubmit={onSubmit}
        as="form"
        mx={{ lg: "7.75em", xl: "7em" }}
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
            px="0"
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
            type="text"
            border="none"
            borderBottom="1px"
            borderRadius="0"
            fontSize="20px"
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
            _focus={{ outline: "none" }}
            name="email"
            ref={register}
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
            px="0"
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
            _focus={{ outline: "none" }}
            ref={register}
            name="message"
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
