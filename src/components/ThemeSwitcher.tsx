// import React from 'react'
import { useContext } from "react";
import "../styles/ThemeSwitcher.css";
import { AppContext } from "./AppContext";

const ThemeSwitcher = ({ isSmall = false }) => {
    const { isDarkMode, setIsDarkMode } = useContext(AppContext);
  const handleSwitchTheme = () => {
    setIsDarkMode((prev: boolean) => !prev);
  };

  const smallClass = isSmall? "small" : "";
  const darkModeClass = isDarkMode ? "night-theme" : "";

  return (
    <div
      className={`theme-switcher ${darkModeClass} ${smallClass}`}
      onClick={handleSwitchTheme}
    >
      <button className="theme-switcher-grid" aria-label="Switch theme">
        <div className="sun" id="sun" aria-hidden="true"></div>
        <div
          className="moon-overlay"
          id="moon-overlay"
          aria-hidden="true"
        ></div>
        <div
          className="cloud-ball cloud-ball-left"
          id="themeSwitcherBall1"
          aria-hidden="true"
        ></div>
        <div
          className="cloud-ball cloud-ball-middle"
          id="themeSwitcherBall2"
          aria-hidden="true"
        ></div>
        <div
          className="cloud-ball cloud-ball-right"
          id="themeSwitcherBall3"
          aria-hidden="true"
        ></div>
        <div
          className="cloud-ball cloud-ball-top"
          id="themeSwitcherBall4"
          aria-hidden="true"
        ></div>
        <div className="star" id="themeSwitcherStar1" aria-hidden="true"></div>
        <div className="star" id="themeSwitcherStar2" aria-hidden="true"></div>
        <div className="star" id="themeSwitcherStar3" aria-hidden="true"></div>
        <div className="star" id="themeSwitcherStar4" aria-hidden="true"></div>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
