import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TbSchool } from "react-icons/tb";
import { BiSolidSchool } from "react-icons/bi";
import { LiaSchoolSolid } from "react-icons/lia";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        {/* timeline ke liye classes aur ye react ke package se uthaya hai */}
        <VerticalTimeline lineColor="#138781">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#138781", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            // Education date
            date="2018-2019"
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<BiSolidSchool />}
          >
            <h3 className="vertical-timeline-element-title">10th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sanjuba High School(CBSE),Nagpur
            </h4>
            <p>Percentage: 95%</p>
          </VerticalTimelineElement>

          {/* 2ND TIMELINE ELEMENT */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#138781", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            // Education date
            date="2019-2020"
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<LiaSchoolSolid />}
          >
            <h3 className="vertical-timeline-element-title">12th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Adarsh Sanskar Vidyalaya(STATE BOARD),Nagpur
            </h4>
            <p>Percentage: 82%</p>
          </VerticalTimelineElement>

          {/* 3rd timeline element */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#138781", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            // Education date
            date="2020-2024"
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<TbSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Graduation(Ongoing)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Veermata jijabai Technological Institute,Mumbai
            </h4>
            <p>CGPA: 6.4(till 6th sem.)</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
