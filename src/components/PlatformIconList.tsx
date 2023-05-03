import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaApple,
  FaLinux,
  FaAppStoreIos,
} from "react-icons/fa";
import { BsNintendoSwitch, BsAndroid2 } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    mac: FaApple,
    linux: FaLinux,
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: BsAndroid2,
    ios: FaAppStoreIos,
    nintendo: BsNintendoSwitch,
  };
  return (
    <HStack marginY={3}>
      {platforms.map((platform) => (
        <Icon color={"gray.400"} as={iconMap[platform.slug]}></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
