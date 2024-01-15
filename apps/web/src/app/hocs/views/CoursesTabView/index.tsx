"use client";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Button } from "@repo/ui";
import CourseCard from "@/components/CourseCard";
import ContentBox from "@/components/ContentBox";

const tabs = [
  { id: "tab1", label: "Python" },
  { id: "tab2", label: "Excel" },
  { id: "tab3", label: "Web Development" },
  { id: "tab4", label: "JavaScript" },
  { id: "tab5", label: "Data Science" },
];

function CoursesTabView(): JSX.Element {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div>
      <ContentBox
        align="center"
        description="Choose from over 210,000 online video courses with new additions published every month"
        tag="Courses"
        title="A broad selection of courses"
      />
      <div className="flex flex-col border-2 border-slate-100 rounded-2xl sm:mx-4 md:mx-8 lg:mx-16 xl:mx-28 px-8 py-6 items-center">
        <div className="hidden md:flex mb-8">
          {tabs.map((tab) => (
            <button
              className={`${
                activeTab === tab.id
                  ? "bg-white flex flex-row justify-center p-1 border-2 border-slate-200 items-start rounded-full mx-1"
                  : "text-gray-500"
              } px-4 py-2`}
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
              }}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className=" text-left w-full ml-4 mb-1">
          <h3 className="text-2xl font-semibold text-black" id="HeadingRoot">
            Build websites and applications with Web Development
          </h3>
          <p
            className="text-sm leading-2 text-gray-500 sm:w-full md:w-5/6 mb-4"
            id="SupportingTextRoot"
          >
            The world of web development is as wide as the internet itself. Much
            of our social and vocational lives play out on the internet, which
            prompts new industries aimed at creating, managing, and debugging
            the websites and applications that we increasingly rely on.
          </p>
          <Button className="mb-8" variant="secondary">
            Explore Python
          </Button>
        </div>
        {tabs.map((tab) => (
          <CSSTransition
            classNames="fade"
            in={activeTab === tab.id}
            key={tab.id}
            timeout={300}
            unmountOnExit
          >
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center grid-cols-1 gap-4 ">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </CSSTransition>
        ))}
      </div>
    </div>
  );
}

export default CoursesTabView;
