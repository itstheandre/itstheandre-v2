import { Badge, Box, Button, Divider, Flex, Heading } from "@chakra-ui/react";
import { Nav } from "../src/components";

function ComponentsPage() {
  return (
    <Box h="100vh" width="lg" m="0 auto">
      <Box mt={5}>
        <Heading>These are the buttons</Heading>
        <Divider mt="4" />
        <Flex justify="space-around" mt="4">
          <Button>Solid</Button>
          <Button variant="outline">Outline</Button>
        </Flex>
        <Divider mt="4" />
        <Heading mt="4">These are the badges</Heading>
        <Divider mt="4" />
        <Flex justify="space-around" mt="4">
          <Badge>Hello</Badge>
        </Flex>
        <Divider mt="4" />
        <Heading mt="4">This is the Navbar</Heading>
        <Divider mt="4" />
        <Flex justify="space-around" mt="4">
          <Nav />
        </Flex>
      </Box>
    </Box>
  );
}

export default ComponentsPage;
