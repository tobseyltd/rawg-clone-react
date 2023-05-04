import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardBox = ({ children }: Props) => {
  return (
    <Box width={360} borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardBox;