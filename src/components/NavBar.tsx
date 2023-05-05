import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Logo from "../assets/Logo/logo.webp";
import SearchBar from "./SearchBar";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack marginBottom={5} spacing={6} alignItems={"center"}>
      <Image marginLeft={-2} src={Logo} boxSize={"70px"}></Image>
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
