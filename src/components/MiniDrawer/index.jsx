import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import vetLogo from "/vet-logo.svg";

import {
  List,
  MagnifyingGlass,
  SquaresFour,
  User,
  PawPrint,
  Gear,
} from "phosphor-react";

import { FiLogOut } from "react-icons/fi";
import { FaUserMd } from "react-icons/fa";

import "react-pro-sidebar/dist/css/styles.css";

import {
  SideBarContainer,
  SidebarCollapsedLayoutChanged,
  SidebarExpandedLayoutChanged,
  SearchIconContainer,
} from "./styles";

export function MiniDrawer() {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <SideBarContainer>
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          {menuCollapse ? (
            <SidebarCollapsedLayoutChanged>
              <button onClick={menuIconClick}>
                <List size={24} />
              </button>
            </SidebarCollapsedLayoutChanged>
          ) : (
            <SidebarExpandedLayoutChanged>
              <img src={vetLogo} />
              <button onClick={menuIconClick}>
                <List size={24} />
              </button>
            </SidebarExpandedLayoutChanged>
          )}
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <SearchIconContainer>
              <MenuItem icon={<MagnifyingGlass size={24} />}>Buscar</MenuItem>
            </SearchIconContainer>
            <MenuItem icon={<SquaresFour size={30} />}>Dashboard</MenuItem>
            <MenuItem icon={<PawPrint size={30} />}>Pets</MenuItem>
            <MenuItem icon={<User size={30} />}>Clientes</MenuItem>
            <MenuItem icon={<FaUserMd size={30} />}>Vets</MenuItem>
            <MenuItem icon={<Gear size={30} />}>Ajustes</MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          {menuCollapse ? (
            <SidebarCollapsedLayoutChanged>
              <FiLogOut size={24} />
            </SidebarCollapsedLayoutChanged>
          ) : (
            <SidebarExpandedLayoutChanged>
              <div>
                <img src="https://github.com/YgorBravimR.png" />
                <div className="vetTitle">
                  <strong>Ygor Bravim</strong>
                  <p>Veterinario</p>
                </div>
              </div>
              <FiLogOut size={24} />
            </SidebarExpandedLayoutChanged>
          )}
        </SidebarFooter>
      </ProSidebar>
    </SideBarContainer>
  );
}
