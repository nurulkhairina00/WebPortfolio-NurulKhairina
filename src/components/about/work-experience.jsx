import { FaLongArrowAltRight } from "react-icons/fa";
import { workExperience } from "../../data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = () => {
  return (
    <>
      <VerticalTimeline>
        {workExperience.map((item) => {
          const isWorkIcon = item.icon === "work";
          const workIconStyles = {
            background: "#00909E",
            color: "#f8f8f8",
          };
          const schoolIconStyles = {
            background: "#264653",
            color: "#f8f8f8",
          };
          return (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work dark:text-light"
              contentArrowStyle={{
                borderRight: `7px solid ${isWorkIcon ? "#00909E" : "#264653"}`,
              }}
              date={item.start_date + " - " + item.end_date}
              icon={
                isWorkIcon ? (
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    width="32"
                    viewBox="0 0 512 512"
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                  </svg>
                ) : (
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    width="40"
                    viewBox="0 0 640 512"
                  >
                    <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                  </svg>
                )
              }
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            >
              <h3 className="font-bold text-2xl text-dark">{item.job_title}</h3>
              <h4 className="font-semibold text-dark">
                {item.company}{" "}
                <span className="text-dark font-normal">
                  {"(" + item.work_schedule + ", " + item.address + ")"}
                </span>
              </h4>
              <ul className="pt-3">
                {item.jobdesk.map((job, i) => (
                  <>
                    <div className="flex">
                      <div className="ps-2 text-secondary">
                        <FaLongArrowAltRight size={15} className="pt-1" />
                      </div>
                      <div className="text-justify ps-3 text-secondary">
                        <li key={i}>{job}</li>
                      </div>
                    </div>
                  </>
                ))}
              </ul>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
