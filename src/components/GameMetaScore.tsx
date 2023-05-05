import { Badge } from "@chakra-ui/react";

interface Props {
  metascore: number;
}

const GameMetaScore = ({ metascore }: Props) => {
  let color = metascore > 75 ? "green" : metascore > 65 ? "yellow" : "";

  return (
    <Badge borderRadius={5} fontSize={15} colorScheme={color} paddingX={3}>
      {metascore}
    </Badge>
  );
};

export default GameMetaScore;
