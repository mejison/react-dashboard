import React from "react";
// import Timer from "./Timer";
import Avatar from "./Avatar";
// import DropDown from "./DropDown";
// import { DropDownIcon } from "./icons";
import logo from "./../assets/images/logo.svg";
import * as icons from "./icons";
import * as menu from "./menu";

import { Link } from "react-router-dom";
import cn from "classnames";
import { NAV_LIST } from "../config";

const Header = ({ path }) => {
  // const ProfileMenu = [
  //   {
  //     title: "Edit profile",
  //     onClick: () => {
  //       console.log("click");
  //     },
  //   },
  //   {
  //     title: "Change password",
  //     onClick: "",
  //   },
  //   {
  //     title: "Log Out",
  //     onClick: "",
  //   },
  // ];
  return (
    <div className="header d-flex align-items-center justify-content-between px-5">
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="header__nav">
        {NAV_LIST.map((nav, i) => {
          // const Icon = icons[nav.icon];
          const Menu = menu[nav.menu];
          const active = path === nav.url;
          return (
            <div
              key={i}
              className={cn("header__item text-capitalize", { active })}
            >
              <Link to={nav.url}>
                {/* <Icon fill={active ? "#009EE8" : "#002550"} /> */}
                <Menu colorActive={active ? "#FF6123" : "#607990"} />
              </Link>
            </div>
          );
        })}
      </div>

      <div>
        {/* <DropDown list={ProfileMenu}> */}
        <div className="d-flex align-items-center">
          <div className="header__icon mr-3 pointer">
            <icons.BellIcon fill="#607990" />
          </div>
          <div className="header__icon mr-3 pointer">
            <icons.QuestionMarkIcon fill="#607990" />
          </div>
          <div className="mr-2 d-flex pointer">
            <Avatar src="" />
          </div>
          {/* <div className="mr-2">John Snow</div> */}
          {/* <div className="pointer">
              <DropDownIcon /> */}
          {/* </div> */}
        </div>
        {/* </DropDown> */}
      </div>
    </div>
  );
};

export default Header;
