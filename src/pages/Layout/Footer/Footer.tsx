import { useState } from "react";
import ArrowDown from "../../../assets/Icons/ArrowDown";
import FooterArc from "../../../assets/Icons/FooterArc";
import FooterLines from "../../../assets/Icons/FooterLines";
import classes from "./Footer.module.scss";
import Dropdown from "../../../components/Dropdown/Dropdown";
import useIsMobile from "../../../hooks/useIsMobile";
import FooterArcMobile from "../../../assets/Icons/FooterArcMobile";
import FooterLinesMobile from "../../../assets/Icons/FooterLinesMobile";

const Footer = () => {
  const isMobile = useIsMobile(576);
  const isTablet = useIsMobile(850);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [_, setSelectedService] = useState<string>("");

  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerArcContainer}>
        {isMobile ? <FooterArcMobile /> : <FooterArc />}
      </div>
      <div className={classes.footerLinesContainer}>
        {isTablet ? <FooterLinesMobile /> : <FooterLines />}
      </div>

      <p className={`${classes.footerTitle} heading-1`}>
        Stay updated with KC Overseas
      </p>

      <div className={classes.footerFormContainer}>
        <input placeholder="Email ID" className={classes.footerFormInput} />
        <div className={classes.footerFormInputContainer}>
          <input
            placeholder="I’m Interested in"
            className={classes.footerFormInput}
            onClick={() => setDropdownActive((prev) => !prev)}
            readOnly
            style={{ cursor: "pointer" }}
          />

          <div className={classes.arrowDownContainer}>
            <ArrowDown />
          </div>
          {dropdownActive && (
            <Dropdown
              setvalue={setSelectedService}
              dropdownItems={[
                "Study Abroad",
                "Immigration",
                "Test Preparation",
                "Visa Assistance",
                "Career Counselling",
                "Scholarships",
              ]}
              position="top"
            />
          )}
        </div>
        <button className={classes.footerFormButton}>Subscribe Now</button>

        {isMobile && <div className={classes.divider}></div>}
      </div>
    </div>
  );
};

export default Footer;
