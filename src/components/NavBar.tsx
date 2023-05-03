import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Logo from "../assets/Logo/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={Logo} boxSize={50}></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
