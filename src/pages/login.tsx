import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";

const LOGIN_MUT = `
mutation {
   login(loginInput:{email:"itstheandre", pass:"123"}) {
     id
     email
   }
 }`;

const QueryTest = `
query {
   test
}
`;

function Login() {
  // const [loginMutation, { data }] = useLoginMutation();
  const { register, handleSubmit } = useForm({ defaultValues: { email: "" } });

  const onSubmit = handleSubmit(async (e) => {});
  return (
    <Box h="100vh">
      <Heading as="h1">Hello</Heading>
      <form style={{ marginTop: "5rem" }} onSubmit={onSubmit}>
        <FormControl id="email">
          <FormLabel>Email Address</FormLabel>
          <Input name="email" type="email" ref={register({ required: true })} />
          <FormHelperText>Email</FormHelperText>
        </FormControl>
        <Button type="submit">Hello</Button>
      </form>
    </Box>
  );
}

export default Login;
