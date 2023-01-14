/** @format */

import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { Links } from "../Molecules/Links";
export const SpMenu: NextPage = () => {
  const [active, setActive] = useState(false);

  const classToggle = () => {
    setActive(!active);
  };
  return (
    <>
      <button
        className={
          active
            ? "header__hamburger hamburger__btn active"
            : "header__hamburger hamburger__btn"
        }
        id="js-hamburger"
        onClick={classToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="sp_menu">
        <div className="sp_menu__body">
          <nav
            className={active ? "sp_menu__nav active" : "sp_menu__nav"}
            id="js-nav"
          >
            <div className="sp_menu__link">
              <Links></Links>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
