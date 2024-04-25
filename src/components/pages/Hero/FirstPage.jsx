import React from "react";
import personImg from "../../../assets/person2.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10  space-y-4">
          {/* image-container */}
          <div>
            <img src={personImg} alt="" className="w-[300px] mx-auto" />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello Folks!</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                I'm Azfar
              </p>
              <p className="text-black/75 text-left">DevOps Practitioner</p>
              <p className="text-black/75">
              I'm a passionate DevOps engineer based in Jaipur, Rajasthan with a strong love for automation and cloud technologies. I'm on a journey to make the world of software development more efficient and scalable.
              </p>
              <a
                className="inline-block primary-btn "
                href="mailto:azfaralam.ops@gmail.com"
              >
                {" "}
                Hire me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
