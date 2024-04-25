import React from "react";
import SkillsLevel from "./SkillsLevel";

const Skills = () => {
  return (
    <div className="h-full page-shadow bg-white px-10">
      <div>
        {/* heading */}
        <div>
          <div className="relative ">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 ">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Skills
            </h1>
          </div>
        </div>
        {/* skills section */}
        <div className="space-y-10">
          <SkillsLevel skillName="Linux" percentage={"90%"} />
          <SkillsLevel skillName="Docker" percentage="95%" />
          <SkillsLevel skillName="Jenkins" percentage="80%" />
          <SkillsLevel skillName="Kubernetes" percentage="95%" />
          <SkillsLevel skillName="Terraform" percentage="80%" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
