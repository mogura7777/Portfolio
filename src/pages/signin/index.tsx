/** @format */

import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Spacer,
  useToast,
  Link,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { Layout } from "src/components/Layout";
import { useRouter } from "src/hooks/useRouter/useRouter";
import { Navigate } from "src/component/Navigate/Navigate";
export const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();
  const { push } = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log({ email, password });
    e.preventDefault();
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      toast({
        title: "ログインしました。",
        status: "success",
        position: "top",
      });
      push((path) => path.library.chat.$url());
    } catch (e) {
      toast({
        title: "エラーが発生しました。",
        status: "error",
        position: "top",
      });
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Layout title="Contact">
      <Container py={14}>
        <Heading>ログイン</Heading>
        <chakra.form onSubmit={handleSubmit}>
          <Spacer height={8} aria-hidden />
          <Grid gap={4}>
            <Box display={"contents"}>
              <FormControl>
                <FormLabel>メールアドレス</FormLabel>
                <Input
                  type={"email"}
                  name={"email"}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>パスワード</FormLabel>
                <Input
                  type={"password"}
                  name={"password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
            </Box>
          </Grid>
          <Spacer height={4} aria-hidden />
          <Center>
            <Button type={"submit"} isLoading={isLoading}>
              <Navigate href={(path) => path.signup.$url()}>
                アカウントを作成
              </Navigate>
            </Button>
            <Button type={"submit"} isLoading={isLoading}>
              ログイン
            </Button>
          </Center>
        </chakra.form>
      </Container>
    </Layout>
  );
};

export default Page;
