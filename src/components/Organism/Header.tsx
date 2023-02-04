/** @format */

import React from "react";
import { Links } from "../Molecules/Links";
import { ChangeThemeButton } from "src/components/Atoms/ChangeThemeButton";
import { useAuthContext } from "src/feature/auth/provider/AuthProvider";
import {
  Avatar,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { FirebaseError } from "@firebase/util";
import { getAuth, signOut } from "firebase/auth";
import { Navigate } from "src/component/Navigate/Navigate";
import { useRouter } from "src/hooks/useRouter/useRouter";
import Link from "next/link";
export const Header = () => {
  const { user } = useAuthContext();

  const toast = useToast();
  const { push } = useRouter();
  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      toast({
        title: "ログアウトしました。",
        status: "success",
        position: "top",
      });
      push((path) => path.signin.$url());
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    }
  };
  return (
    <header>
      <nav className="bg-gray-800 nav">
        <div className="nav__body">
          <div className="nav__body_list">
            <Links></Links>
          </div>

          <div className="nav__body_btn">
            <div className="nav__body_ttl">
              <Flex>
                <Navigate href={(path) => path.$url()}> </Navigate>
                <Spacer aria-hidden />
                {user ? (
                  <Menu>
                    <MenuButton>
                      <Avatar flexShrink={0} width={10} height={10} />
                    </MenuButton>
                    <MenuList py={0}>
                      <MenuItem background={"gray.400"} onClick={handleSignOut}>
                        サインアウト
                      </MenuItem>
                    </MenuList>
                  </Menu>
                ) : (
                  <Button colorScheme={"teal"}>
                    <Link href={"/signin"}>ログイン</Link>
                  </Button>
                )}
              </Flex>
            </div>
            <div className=" hover:bg-gray-700 px-3 py-2 rounded">
              <ChangeThemeButton></ChangeThemeButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
