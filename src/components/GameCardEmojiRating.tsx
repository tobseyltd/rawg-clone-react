import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/Emojis/bulls-eye.webp";
import meh from "../assets/Emojis/meh.webp";
import thumpsUp from "../assets/Emojis/thumbs-up.webp";

interface Props {
  rating: number;
}

const GameCardEmojiRating = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumpsUp, alt: "recommended", boxSize: "20px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "25px" },
  };

  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} />;
};

export default GameCardEmojiRating;
