import Promotion from "./Promotion/Promotion";
import classes from "./Homepage.module.scss";
import PurpleBg from "../../assets/Icons/PurpleBg";
import Services from "./Services/Services";
import HighlightSteps from "./HighlightSteps/HighlightSteps";
import Events from "./Events/Events";
import Testimonials from "./Testimonials/Testimonials";
import LatestUpdates from "./LatestUpdates/LatestUpdates";
import useIsMobile from "../../hooks/useIsMobile";
import PurpleBgMobile from "../../assets/Icons/PurpleBgMobile";

const Homepage = () => {
  const isMobile = useIsMobile(576);

  return (
    <div className={classes.homepageContainer}>
      <div className={classes.purpleBgContainer}>
        {isMobile ? <PurpleBgMobile /> : <PurpleBg />}
      </div>

      <Promotion />
      <Services />
      <HighlightSteps />
      <Events />
      <Testimonials />
      <LatestUpdates />
    </div>
  );
};

export default Homepage;
