import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "./details";

function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto text-center lg:px-10">
        <div className="flex flex-col w-full mb-5">
          <ChipIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Skills & Technologies
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below mentioned is the skillset that I have learned in a span of 1
            year, and my aim is to build a Safe Decentralised Haven for users.{" "}
            <br />
            Appreciations and Feedbacks motivates me, so soon I am gonna put up
            a feedback/contact section to this website.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
          {skills.map((skill) => (
            <a
              className="p-2 sm:w-1/2 xl:w-1/3 w-full cursor-pointer"
              key={skill}
            >
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font text-white font-medium">
                  {skill}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
