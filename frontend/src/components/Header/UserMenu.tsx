import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  
} from "@chakra-ui/react";
import { FaUserGraduate } from "react-icons/fa6";

const UserMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={  <FaUserGraduate size={28} className="text-slate-700" />}
        variant="link"
      />
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
