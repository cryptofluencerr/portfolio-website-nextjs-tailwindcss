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
            Currently working at{" "}
            <a
              className="underline hover:text-white"
              target="blank"
              href="https://warlands.io/team"
            >
              {" "}
              Warlands
            </a>{" "}
            as a Blockchain Developer. Have sound knowledge of Web 3.0,
            Ethereum, Binance Chain, NFT&apos;s, Defi, Crypto Banks, and
            currently building.{" "}
            <a
              className="underline hover:text-white"
              target="blank"
              href="https://www.youtube.com/watch?v=JxR08Ba55v0"
            >
              I have been interviewed with the Code Eater channel, which is
              India&apos;s first Blockchain Tutorial platform in Hindi.
            </a>
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
