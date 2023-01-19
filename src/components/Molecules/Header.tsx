/** @format */

import React from "react";
import { Links } from "./Links";
import { ChangeThemeButton } from "src/components/Atoms/ChangeThemeButton";
export const Header = () => {
  return (
    <header>
      <nav className="bg-gray-800 nav">
        <div className="nav__body">
          <div className="nav__body_list">
            <Links></Links>
          </div>
          <div className="nav__body_btn hover:bg-gray-700 px-3 py-2 rounded">
            <ChangeThemeButton></ChangeThemeButton>
          </div>
        </div>
      </nav>
    </header>
  );
};
