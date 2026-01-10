import { useState } from "react";
import classes from "./Carousel.module.scss";
import ChevronLeft from "../../assets/Icons/ChevronLeft";
import ChevronRight from "../../assets/Icons/ChevronRight";

interface CarouselData {
  icon: React.ReactNode;
  title: string;
  content: string;
}

interface Carousel {
  carouselData: CarouselData[];
  variants: "default" | "small";
}

const Carousel = ({ carouselData, variants = "default" }: Carousel) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    if (activeIndex === 0) return;
    setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex === carouselData.length - 1) return;
    setActiveIndex(activeIndex + 1);
  };

  return (
    <div className={classes.carouselContainer}>
      <div className={classes.carouselContentContainer}>
        {carouselData.map((el: CarouselData, index: number) => (
          <div
            className={`${
              variants === "small"
                ? classes.carouselItemSmall
                : classes.carouselItem
            }`}
            style={
              variants === "small"
                ? {
                    transform: `translateX(calc(50vw - 137px - ${
                      activeIndex * (274 + 40)
                    }px))`,
                  }
                : {
                    transform: `translateX(calc(50vw - 220px - ${
                      activeIndex * (440 + 40)
                    }px))`,
                  }
            }
          >
            <div
              className={`${classes.numberContainer} ${
                activeIndex === index
                  ? classes.numberContainerActive
                  : classes.numberContainerInActive
              }`}
            >
              <p className="heading-3">{index + 1}</p>
            </div>

            <div className={classes.contentContainer}>
              <div
                className={`${
                  activeIndex === index
                    ? classes.iconContainerActive
                    : classes.iconContainerInActive
                } ${classes.iconContainer}`}
              >
                <div className={classes.icon}>{el.icon}</div>
              </div>
              <div className={`heading-5 ${classes.title}`}>{el.title}</div>
              <div className={`paragraph-16 ${classes.content}`}>
                {el.content}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.actionBtnContainer}>
        <button onClick={handlePrevious}>
          <ChevronLeft />
          <p>Previous Step</p>
        </button>
        <button onClick={handleNext}>
          <p>Next Step</p>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
