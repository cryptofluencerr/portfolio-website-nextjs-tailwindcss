import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "./details";
import Image from "next/image";

function Projects() {
  return (
    <section id="projects">
      <div className="container px-5 py-10 mx-auto text-center lg:px-10">
        <div className="flex flex-col w-full mb-5">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I&apos;ve Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {projects.map((project) => (
            <a
              href={project.url}
              key={project.image}
              target="blank"
              className="sm:w-1/2 p-2"
            >
              <div className="flex relative">
                <img
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  {/* <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {project.subtitle}
                </h2> */}
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
