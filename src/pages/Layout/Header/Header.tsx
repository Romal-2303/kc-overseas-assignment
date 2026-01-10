import { useState } from "react";
import HamburgerMenu from "../../../assets/Icons/HamburgerMenu";
import KcLogo from "../../../assets/Icons/KcLogo";
import KcLogoMobile from "../../../assets/Icons/KcLogoMobile";
import useIsMobile from "../../../hooks/useIsMobile";
import classes from "./Header.module.scss";

const Header = () => {
  const isMobile = useIsMobile(1050);

  const [menuOpen, setMenuOpen] = useState(false);

  const hamburgerMenuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={classes.headerContainer}>
      <div className={classes.logoContainer}>
        {isMobile ? <KcLogoMobile /> : <KcLogo />}
      </div>
      {isMobile ? (
        <>
          <div
            className={classes.hamburgerMenuContainer}
            onClick={hamburgerMenuHandler}
          >
            <HamburgerMenu />

            {menuOpen && (
              <div className={classes.menuOverlay}>
                <p className="text-button-1">Study Destinations</p>
                <p className="text-button-1">Services</p>
                <p className="text-button-1">Company</p>
                <p className="text-button-1">Upcoming Events</p>
                <button className={classes["course-finder-btn"]}>
                  Course Finder
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className={classes.menuContainer}>
          <p className="text-button-1">Study Destinations</p>
          <p className="text-button-1">Services</p>
          <p className="text-button-1">Company</p>
          <p className="text-button-1">Upcoming Events</p>
          <button className={classes["course-finder-btn"]}>
            Course Finder
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
