import ChevronRight from "../../../assets/Icons/ChevronRight";
import classes from "./Events.module.scss";
import NewYork from "../../../assets/Images/newyork.png";
import Canada from "../../../assets/Images/canada.png";
import London from "../../../assets/Images/london.png";
import useIsMobile from "../../../hooks/useIsMobile";

let highlightedEvent = {
  date: "Mar 19 · 05:00 PM to 07:30 PM",
  title: "USA Vertual Addmission Day",
  description:
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: NewYork,
};

let eventList = [
  {
    date: "May 18 - May 21  · 04:30 PM to 06:30 PM",
    title: "New Zealand Virtual Admissions Week",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
    image: Canada,
  },
  {
    date: "May 24 - May 28  · 04:00 PM to 06:00 PM",
    title: "UK Virtual Admissions Week",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
    image: London,
  },
];

const Events = () => {
  const isMobile = useIsMobile(900);

  return (
    <div className={classes.eventsContainer}>
      <p className={`heading-1 ${classes.headingText}`}>Webinars & Events</p>
      {isMobile ? (
        <div className={classes.eventListContainerMobile}>
          <div className={classes.highlightedEventContainer}>
            <div className={classes.eventCard}>
              <div className={classes.imageContainer}>
                <img
                  src={highlightedEvent.image}
                  className={classes.eventImage}
                  alt="New York"
                />
              </div>
              <div className={classes.eventContentContainer}>
                <div className={classes.dateContainer}>
                  {highlightedEvent.date}
                </div>
                <div className={`heading-5 ${classes.titleContainer}`}>
                  {highlightedEvent.title}
                </div>
                <div className={classes.descriptionContainer}>
                  {highlightedEvent.description}
                </div>
                <button className={classes.registerNowBtn}>
                  <p>Register Now</p>
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* <div className={classes.remainingEventsContainer}>
            {eventList.map((el) => (
              <div className={classes.eventCard}>
                <div className={classes.imageContainer}>
                  <img
                    src={el.image}
                    className={classes.eventImage}
                    alt="sky-scrapers"
                  />
                </div>
                <div className={classes.eventContentContainer}>
                  <div className={classes.dateContainer}>{el.date}</div>
                  <div className={`heading-4 ${classes.titleContainer}`}>
                    {el.title}
                  </div>
                  <div className={classes.descriptionContainer}>
                    {el.description}
                  </div>

                  <button className={classes.registerNowBtn}>
                    <p>Register Now</p>
                    <ChevronRight />
                  </button>
                </div>
              </div>
            ))}
          </div> */}

          {eventList.map((el, index) => (
            <div key={index} className={classes.highlightedEventContainer}>
              <div className={classes.eventCard}>
                <div className={classes.imageContainer}>
                  <img
                    src={el.image}
                    className={classes.eventImage}
                    alt="New York"
                  />
                </div>
                <div className={classes.eventContentContainer}>
                  <div className={classes.dateContainer}>{el.date}</div>
                  <div className={`heading-5 ${classes.titleContainer}`}>
                    {el.title}
                  </div>
                  <div className={classes.descriptionContainer}>
                    {el.description}
                  </div>
                  <button className={classes.registerNowBtn}>
                    <p>Register Now</p>
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={classes.eventListContainer}>
          <div className={classes.highlightedEventContainer}>
            <div className={classes.eventCard}>
              <div className={classes.imageContainer}>
                <img
                  src={highlightedEvent.image}
                  className={classes.eventImage}
                  alt="New York"
                />
              </div>
              <div className={classes.eventContentContainer}>
                <div className={classes.dateContainer}>
                  {highlightedEvent.date}
                </div>
                <div className={`heading-4 ${classes.titleContainer}`}>
                  {highlightedEvent.title}
                </div>
                <div className={classes.descriptionContainer}>
                  {highlightedEvent.description}
                </div>
                <button className={classes.registerNowBtn}>
                  <p>Register Now</p>
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className={classes.remainingEventsContainer}>
            {eventList.map((el) => (
              <div className={classes.eventCard}>
                <div className={classes.imageContainer}>
                  <img
                    src={el.image}
                    className={classes.eventImage}
                    alt="sky-scrapers"
                  />
                </div>
                <div className={classes.eventContentContainer}>
                  <div className={classes.dateContainer}>{el.date}</div>
                  <div className={`heading-4 ${classes.titleContainer}`}>
                    {el.title}
                  </div>
                  <div className={classes.descriptionContainer}>
                    {el.description}
                  </div>

                  <button className={classes.registerNowBtn}>
                    <p>Register Now</p>
                    <ChevronRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className={classes.seeMoreBtn}>
        <p>See More</p>
        <ChevronRight />
      </button>
    </div>
  );
};

export default Events;
