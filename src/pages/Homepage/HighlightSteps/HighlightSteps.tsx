import InkPen from "../../../assets/Icons/InkPen";
import Spriral from "../../../assets/Icons/Spiral";
import Carousel from "../../../components/Carousel/Carousel";
import useIsMobile from "../../../hooks/useIsMobile";
import classes from "./HighlightSteps.module.scss";

let carouselData = [
  {
    icon: <Spriral />,
    title: "Counselling",
    content: "Plan your Academic and Career Goals",
  },
  {
    icon: <InkPen />,
    title: "Test Preparation",
    content: "Appear for Standardized Tests",
  },
  {
    icon: <Spriral />,
    title: "Scholarships",
    content: "Apply for Scholarships and Loans",
  },
  {
    icon: <InkPen />,
    title: "University Selection",
    content: "Choose your Dream University",
  },
  {
    icon: <InkPen />,
    title: "University Selection",
    content: "Choose your Dream University",
  },
  {
    icon: <InkPen />,
    title: "University Selection",
    content: "Choose your Dream University",
  },
  {
    icon: <InkPen />,
    title: "University Selection",
    content: "Choose your Dream University",
  },
];

const HighlightSteps = () => {
  const isMobile = useIsMobile(950);

  return (
    <div className={classes.highlightStepsContainer}>
      <p className={`heading-1 ${classes.headingText}`}>
        7 Easy Steps to Land in your Dream University
      </p>

      <div className={classes.carouselContainer}>
        <Carousel
          carouselData={carouselData}
          variants={isMobile ? "small" : "default"}
        />

        {!isMobile && <div className={classes.overlayContainerRight}></div>}
        {!isMobile && <div className={classes.overlayContainerLeft}></div>}
      </div>
    </div>
  );
};

export default HighlightSteps;
