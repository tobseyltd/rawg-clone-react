import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch, BsX } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        variant='filled'
        placeholder='Search Games...'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          onSearch(e.target.value);
        }}
      ></Input>
      <InputRightElement
        onClick={() => {
          if (inputValue) {
            setInputValue("");
            onSearch("");
          }
        }}
        children={<BsX />}
        style={{ cursor: "pointer" }}
      />
    </InputGroup>
  );
};

export default SearchBar;
