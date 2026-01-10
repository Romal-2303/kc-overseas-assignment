import AIRC from "../../../assets/Icons/AIRC";
import BritishCouncil from "../../../assets/Icons/BritishCouncil";
import ChevronRight from "../../../assets/Icons/ChevronRight";
import DesignCircles from "../../../assets/Icons/DesignCircles";
import DesignCirclesMobile from "../../../assets/Icons/DesignCirclesMobile";
import KunaiFilled from "../../../assets/Icons/KunaiFilled";
import useIsMobile from "../../../hooks/useIsMobile";
import classes from "./LatestUpdates.module.scss";

let updatesList = [
  {
    icon: <AIRC />,
    orgName: "American International Recruitment Council",
    info: "Certified Agents",
    date: "October 2018 - 2028",
  },
  {
    icon: <BritishCouncil />,
    orgName: "The British Council",
    info: "Advanced Agent Certificate",
    date: "August 2016 - 2018",
  },
];

const LatestUpdates = () => {
  const isMobile = useIsMobile(900);

  return (
    <section className={classes.latestUpdatesSection}>
      <p className={`heading-1 ${classes.headingText}`}>Latest KC Updates</p>

      {isMobile ? (
        <div className={classes.latestUpdatesContainerMobile}>
          <div className={classes.highlightedUpdateCard}>
            <div className={classes.contentContainer}>
              <p className={`heading-1 ${classes.headingTextMobile}`}>
                We’re Hiring!
              </p>
              <p className={`${classes.descriptionText} paragraph-16`}>
                KC continues recruitments for its offices across India and Asia
                even during the unprecedented times of Covid.
              </p>
            </div>

            <button className={classes.applyNowBtn}>Apply Now</button>

            <div className={classes.designOverlay}>
              <DesignCirclesMobile />
            </div>
          </div>

          <div className={classes.latestUpdatesList}>
            {updatesList.map((el, index) => (
              <div key={index} className={classes.updateCard}>
                <div className={classes.iconContainer}>{el.icon}</div>
                <div className={classes.orgName}>{el.orgName}</div>
                <div className={classes.kunaisContainer}>
                  <KunaiFilled />
                  <div className={classes.bigKunai}>
                    <KunaiFilled />
                  </div>
                  <KunaiFilled />
                </div>
                <div className={`${classes.info} heading-4`}>{el.info}</div>
                <div className={classes.date}>{el.date}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={classes.latestUpdatesContainer}>
          <div className={classes.highlightedUpdateCard}>
            <div className={classes.contentContainer}>
              <p className="heading-1">We’re Hiring!</p>
              <p className={`${classes.descriptionText} heading-4`}>
                KC continues recruitments for its offices across India and Asia
                even during the unprecedented times of Covid.
              </p>
            </div>

            <button className={classes.applyNowBtn}>Apply Now</button>

            <div className={classes.designOverlay}>
              <DesignCircles />
            </div>
          </div>
          <div className={classes.latestUpdatesList}>
            {updatesList.map((el, index) => (
              <div key={index} className={classes.updateCard}>
                <div className={classes.iconContainer}>{el.icon}</div>
                <div className={classes.orgName}>{el.orgName}</div>
                <div className={classes.kunaisContainer}>
                  <KunaiFilled />
                  <div className={classes.bigKunai}>
                    <KunaiFilled />
                  </div>
                  <KunaiFilled />
                </div>
                <div className={`${classes.info} heading-4`}>{el.info}</div>
                <div className={classes.date}>{el.date}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className={classes.moreNewsBtn}>
        <p>More News</p>
        <ChevronRight />
      </button>
    </section>
  );
};

export default LatestUpdates;
