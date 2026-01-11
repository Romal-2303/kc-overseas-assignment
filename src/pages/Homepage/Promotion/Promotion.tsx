import ChevronDown from "../../../assets/Icons/ChevronDown";
import StarDisabled from "../../../assets/Icons/StarDisabled";
import KunaiFilled from "../../../assets/Icons/KunaiFilled";
import classes from "./Promotion.module.scss";
import { useState } from "react";
import Dropdown from "../../../components/Dropdown/Dropdown";
import useIsMobile from "../../../hooks/useIsMobile";

const Promotion = () => {
  const isMobile = useIsMobile(576);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("Pune Branch");

  return (
    <section className={classes.promotionContainer}>
      {!isMobile && (
        <>
          <div className={classes.KunaiFilled}>
            <KunaiFilled />
          </div>
          <div className={classes.KunaiFilled2}>
            <KunaiFilled />
          </div>
          <div className={classes.starDisabled}>
            <StarDisabled />
          </div>
          <div className={classes.dot1}></div>
          <div className={classes.dot2}></div>
          <div className={classes["dot3-empty"]}></div>
        </>
      )}
      <div className={classes.breadCrumbContainer}>
        <p className={`${classes["breadcrumb-inactive"]} heading-5`}>Home</p>
        <div className={classes.breadCrumbSeparator}></div>
        <p className={`heading-5`}>{selectedBranch}</p>
      </div>

      <div className={classes.mainHeading}>
        <p className="heading-1">
          <p>KC Overseas Education</p>
          <p className={classes.locationText}>
            {selectedBranch.split(" ")[0]}
            {!isMobile && <p className={classes.bottomDecorator}></p>}
          </p>
        </p>
      </div>

      <p className={`paragraph-16 ${classes.descriptionText}`}>
        We value your career aspirations, which is why we map your preferences
        with the best that our global universities have to offer. Thousands of
        our students are pursuing their programs and aspirations in eminent
        universities globally and we welcome you to pursue yours!
      </p>

      <div className={classes.actionsMenuContainer}>
        <button className={classes.enquireNowBtn}>Enquire Now</button>
        <div
          className={classes.branchAddressDropdown}
          onClick={() => setDropdownActive((prev) => !prev)}
        >
          <div className={classes.chevronDownIconContainer}>
            <ChevronDown />
          </div>
          <p>Branch Address</p>
          {dropdownActive && (
            <Dropdown
              setvalue={setSelectedBranch}
              dropdownItems={[
                "Pune Branch",
                "Mumbai Branch",
                "Bangalore Branch",
                "Chennai Branch",
                "Hyderabad Branch",
                "Delhi Branch",
              ]}
              position="bottom"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Promotion;
