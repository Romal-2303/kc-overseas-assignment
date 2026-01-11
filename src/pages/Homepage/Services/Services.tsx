import Certificate from "../../../assets/Icons/Certificate";
import EnclosedStar from "../../../assets/Icons/EnclosedStar";
import IndexFinger from "../../../assets/Icons/IndexFinger";
import Location from "../../../assets/Icons/Location";
import classes from "./Services.module.scss";
import GirlTalking from "../../../assets/Images/girls_talking.png";
import StarFilled from "../../../assets/Icons/StarFilled";

let servicesList = [
  { icon: <IndexFinger />, content: "Test Preparing & Coaching" },
  { icon: <Location />, content: "Course, Country & University Selection" },
  { icon: <Certificate />, content: "Application Assistance" },
  { icon: <EnclosedStar />, content: "Scholarships" },
];

let featuresList = [
  "Virtual & In Person Coaching and Counselling",
  "Comprehensive Assistance for Applications, Admissions & Visas",
  "High Value Scholarships and Study Loans",
];

const Services = () => {
  return (
    <div className={classes.servicesContainer}>
      <div className={`${classes.headingText} heading-1`}>
        Services we provide
      </div>

      <div className={classes.servicesList}>
        {servicesList.map((el) => (
          <div className={classes.serviceItem}>
            <div>{el.icon}</div>
            <p className="heading-5">{el.content}</p>
          </div>
        ))}
      </div>

      <button className={classes.enquireNowBtn}>Enquire Now</button>

      <div className={classes.highlightSection}>
        <div className={classes.OverlayImageContainer}>
          <div className={classes.imageContainer}>
            <img
              src={GirlTalking}
              className={classes.girlTalkingImage}
              alt="GirlTalking"
            />
          </div>
        </div>
        <div className={classes.contentContainer}>
          <p className={`heading-3 ${classes.headingText}`}>
            Realize your global ambitions with us
          </p>
          <p className={`paragraph-16 ${classes.descriptionText}`}>
            With a keen ear for your choices and preferences, our counselling
            experience is so seamless that you will land in your dream
            university even before you do!
          </p>

          <div className={classes.featuresContainer}>
            {featuresList.map((el) => (
              <div className={classes.featureItem}>
                <div className={classes.starFilledIcon}>
                  <StarFilled />
                </div>
                <p>{el}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
