import { useState } from "react";
import classes from "./Testimonials.module.scss";
import ChevronLeft from "../../../assets/Icons/ChevronLeft";
import ChevronRight from "../../../assets/Icons/ChevronRight";
import Quote from "../../../assets/Icons/Quote";
import useIsMobile from "../../../hooks/useIsMobile";

let testimonialsList = [
  {
    testimonial:
      "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    name: "Mandar Suryawanshi",
    university: "Northeastern University, USA",
  },
  {
    testimonial:
      "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    name: "Aarohi Sighel",
    university: "University of South Australia, Australia",
  },
  {
    testimonial:
      "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
    name: "Susan Mendonca",
    university: "Conestoga College, Canada",
  },
  {
    testimonial:
      "KC guided me step by step, from preparing documents to settling in a new country. Their expertise made me feel confident and supported at every point.",
    name: "Ravi Choudhary",
    university: "Technical University of Munich, Germany",
  },
  {
    testimonial:
      "I am grateful for the transparency and dedication shown by the KC team. They were always available for my queries, no matter how small. Highly recommended!",
    name: "Sonal Verma",
    university: "University of Auckland, New Zealand",
  },
  {
    testimonial:
      "KC's experienced advisors helped me make informed decisions and stay on track throughout my application journey. I owe my success to their encouragement and care.",
    name: "Priyanka Iyer",
    university: "University of Glasgow, UK",
  },
];

const Testimonials = () => {
  const isMobile = useIsMobile(1000);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    if (activeIndex === 0) return;
    setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (activeIndex === testimonialsList.length - 1) return;
    setActiveIndex((prev) => prev + 1);
  };

  return (
    <section className={classes.testimonialsSection}>
      <p className={`heading-1 ${classes.headingText}`}>Our students love us</p>

      {isMobile ? (
        <div className={classes.testimonialsContainerMobile}>
          <div className={classes.testimonialListContainer}>
            {testimonialsList.map((el, index) => {
              return (
                <div
                  key={index}
                  className={`${classes.testimonialCard}`}
                  style={
                    activeIndex === index
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <div
                    className={classes.leftArrowContainer}
                    onClick={handlePrevious}
                  >
                    <ChevronLeft />
                  </div>

                  <div
                    className={classes.rightArrowContainer}
                    onClick={handleNext}
                  >
                    <ChevronRight />
                  </div>

                  <div className={classes.quoteContainer}>
                    <Quote />
                  </div>
                  <p className={`${classes.testimonialText} paragraph-14`}>
                    {el.testimonial}
                  </p>
                  <p className={`${classes.name} text-button-1`}>{el.name}</p>
                  <p className={classes.university}>{el.university}</p>
                </div>
              );
            })}
          </div>
          <div className={classes.dotsContainer}>
            {Array(testimonialsList.length)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`${classes.dot} ${
                    activeIndex === index ? classes.dotActive : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></div>
              ))}
          </div>
        </div>
      ) : (
        <div className={classes.testimonialsContainer}>
          <div className={classes.testimonialListContainer}>
            <div
              className={classes.leftArrowContainer}
              onClick={handlePrevious}
            >
              <ChevronLeft />
            </div>
            <div className={classes.testimonialListWrapper}>
              <div className={classes.testimonialList}>
                {testimonialsList.map((el, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        activeIndex + 1 === index
                          ? classes.testimonialCardActive
                          : classes.testimonialCard
                      }
                      style={{
                        transform: `translateX(${
                          (370 + 30) * (index - activeIndex)
                        }px)`,
                      }}
                    >
                      <div className={classes.quoteContainer}>
                        <Quote />
                      </div>
                      <p className={`${classes.testimonialText} paragraph-16`}>
                        {el.testimonial}
                      </p>
                      <p className={`${classes.name} text-button-1`}>
                        {el.name}
                      </p>
                      <p className={classes.university}>{el.university}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={classes.rightArrowContainer} onClick={handleNext}>
              <ChevronRight />
            </div>
          </div>
          <div className={classes.dotsContainer}>
            {Array(testimonialsList.length)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`${classes.dot} ${
                    activeIndex === index ? classes.dotActive : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></div>
              ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
