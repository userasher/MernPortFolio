import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className=" container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Internships
          </h2>
          <hr />
          <VerticalTimeline lineColor="red" layout="1-column-left ">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="June-July 2023(for 2 Months)"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">
                Railway Concession project
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                VJTI,Mumbai
              </h4>
              <p></p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
