import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  
} from "@chakra-ui/react";
import { FaUserGraduate } from "react-icons/fa6";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={  <FaUserGraduate size={28} className="text-slate-700" />}
        variant="link"
      />
      <MenuList>
      <Link to="/user-profile"><MenuItem>Profile</MenuItem></Link>
        <Link to="student-dashboard"><MenuItem>Dashboard</MenuItem></Link> 
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
