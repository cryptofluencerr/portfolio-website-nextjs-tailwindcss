import React from "react";
import Image from "next/image";

function About() {
  return (
    <section>
      <div className="container mx-auto flex px-10 flex-col md:flex-row mt-10">
        <div
          className="lg:text-start md:mb-0 md:items-start lg:pr-24 md:pr-16  md:w-1/2 grow 
      items-start text-start flex mb-12 flex-col"
        >
          <h2 className="title-font sm:text-4xl text-3xl font-medium mb-4 text-white">
            Hi I am Karan.
            <br className="inline-block" />I love to build amazing web Dapps.
          </h2>
          <p className=" leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            quas eum necessitatibus libero nobis, fugit neque officiis at
            excepturi numquam consectetur aspernatur temporibus laborum fuga
            rem. Sapiente sit neque id?
          </p>
        </div>

        <Image
          className="object-contain object-center rounded "
          src="/images/coder.png"
          width={300}
          height={300}
          alt="coder"
        />
      </div>
    </section>
  );
}

export default About;
