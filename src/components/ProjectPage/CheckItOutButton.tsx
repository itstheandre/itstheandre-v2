import { Box, Button } from "@chakra-ui/react";
import { NextLink } from "../Common";

interface CheckItOutButtonProps {
  url: string;
}

export const CheckItOutButton = ({ url }: CheckItOutButtonProps) => {
  return (
    <Box
      textAlign="center"
      mb="20"
      mt="10"
      className="check-it-out-button"
      d="block"
    >
      <NextLink
        href={url}
        textDecor="none"
        _hover={{ textDecor: "none" }}
        referrerPolicy="no-referrer"
        isExternal
      >
        <Button variant="outline" textAlign="center">
          Check it out
        </Button>
      </NextLink>
    </Box>
  );
};
