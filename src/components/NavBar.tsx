import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize={50}></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
