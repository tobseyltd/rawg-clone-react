import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";

const SortSelector = () => {
    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
            Sort by: select
          </MenuButton>
    
          <MenuList>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
            <MenuItem>4</MenuItem>
          </MenuList>
        </Menu>
      );
}

export default SortSelector