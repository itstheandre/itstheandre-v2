import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { StyledBurger } from "../../../theme/custom/burger.button";
import { StrokerBox } from "../../../theme/custom/stroker.div";
import { NextLink } from "../../Common";
import { useMenu } from "../Layout";

export const BurgerMenu = () => {
  const { colorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useMenu();

  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay zIndex={isOpen ? 1 : -1}>
          <DrawerContent
            pos="relative"
            bg={colorMode === "dark" ? "gray.800" : "gray.50"}
            opacity="0.95"
          >
            <DrawerBody h="100vh" mt={5}>
              <StrokerBox h="100%" colormode={colorMode} pos="relative">
                <Flex direction="column" h="100%" justifyContent="center">
                  <NextLink
                    href="/"
                    onClick={onClose}
                    className=" stroke"
                    mb="4"
                  >
                    <Heading fontSize="5xl" as="h1" className="stroke">
                      Home
                    </Heading>
                  </NextLink>
                  <NextLink
                    href="/about"
                    onClick={onClose}
                    className=" stroke"
                    mb="4"
                  >
                    <Heading fontSize="5xl" as="h1" className="stroke">
                      About
                    </Heading>
                  </NextLink>
                  <NextLink
                    href="/work"
                    onClick={onClose}
                    className=" stroke"
                    mb="4"
                  >
                    <Heading fontSize="5xl" as="h1" className="stroke">
                      Work
                    </Heading>
                  </NextLink>
                  <NextLink
                    href="/blog"
                    onClick={onClose}
                    className=" stroke"
                    mb="4"
                  >
                    <Heading fontSize="5xl" as="h1" className="stroke">
                      Blog
                    </Heading>
                  </NextLink>
                  <NextLink
                    href="/contact"
                    onClick={onClose}
                    className=" stroke"
                    mb="4"
                  >
                    <Heading fontSize="5xl" as="h1" className="stroke">
                      Contact
                    </Heading>
                  </NextLink>
                </Flex>
              </StrokerBox>
              {/* </StrokerBox>

              {/* <StyledBurger
                open={isOpen}
                onClick={onClose}
                colorMode={colorMode}
              >
                <div />
                <div />
                <div />
              </StyledBurger> */}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <StyledBurger
        display={{ base: "flex", md: "none" }}
        open={isOpen}
        onClick={isOpen ? onClose : onOpen}
        colormode={colorMode}
        _hover={{
          bg: "none",
        }}
        _active={{
          bg: "none",
        }}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};
