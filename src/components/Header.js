import React from 'react';
// import Timer from "./Timer";
import Avatar from './Avatar';
// import DropDown from "./DropDown";
// import { DropDownIcon } from "./icons";
import logo from './../assets/images/logo.svg';
import * as icons from './icons';

import { Link } from 'react-router-dom';
import cn from 'classnames';
import { NAV_LIST } from '../config';

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
          const active = path === nav.url;
          return (
            <div
              key={i}
              className={cn('header__item text-capitalize', { active })}
              style={{ backgroundColor: `${active ? '#FF7038' : '#093C50'}` }}
            >
              <Link to={nav.url} className="link">
                <div style={{ color: `${active ? '#FFFFFF' : '#D6DCE3'}` }}>
                  {nav.title}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div>
        {/* <DropDown list={ProfileMenu}> */}
        <div className="d-flex align-items-center">
          <div className="header__icon mr-3 pointer">
            <icons.BellIcon fill="#ffffff" />
          </div>
          <div className="header__icon mr-3 pointer">
            <icons.QuestionMarkIcon fill="#ffffff" />
          </div>
          <div className="heaer-avatar mr-2 d-flex pointer">
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
