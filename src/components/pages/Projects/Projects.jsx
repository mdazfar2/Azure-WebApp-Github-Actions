import React from "react";
import ProjectBox from "./ProjectBox.jsx";
import Heading from "../../HelperComp/Heading.jsx";

const Projects = ({ ProjectData }) => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="Projects"
        subtitle="Integrate various tools and technologies, and then deploy."
      />

      {/* Project section  */}
      <div>
        <ProjectBox ProjectData={ProjectData} />
      </div>
    </div>
  );
};

export default Projects;
