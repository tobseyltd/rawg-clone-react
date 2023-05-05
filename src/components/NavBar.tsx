import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Logo from "../assets/Logo/logo.webp";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack spacing={6} alignItems={"center"}>
      <Image src={Logo} boxSize={59}></Image>
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
