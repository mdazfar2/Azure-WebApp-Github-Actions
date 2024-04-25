import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
       
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
        Meaning of My name is 𝐕𝐢𝐜𝐭𝐨𝐫𝐢𝐨𝐮𝐬. Yeah You are thinking Right I am 𝐀𝐳𝐟𝐚𝐫 𝐀𝐥𝐚𝐦. Intend to build a career with committed & dedicated people, who will help me to explore myself and understand my potential. Willing to work as a key player in challenging and creative environment with all my professional and technical skills.

        </p>{" "}
        <br />
        <p>
        A dedicated DevOps enthusiast with expertise in a wide array of technologies including Linux, Docker, Kubernetes, AWS, Azure, Python, Ansible, and more. My focus lies in deploying applications efficiently using tools like Jenkins CI/CD pipelines and managing scalable infrastructure with Amazon EKS clusters. I thrive on continuous learning and innovation in the cloud-native ecosystem. Let's connect and dive deeper into the world of DevOps and cloud technologies together
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
        <a href="https://linkedin.com/in/md-azfar-alam" target="_blank" rel="noopener noreferrer" className="social-btn">
             <AiFillLinkedin />
          </a>
          <a href="https://github.com/mdazfar2" target="_blank" rel="noopener noreferrer" className="social-btn">
             <AiFillGithub />
          </a>
          <a href="https://www.facebook.com/mdazfar2" target="_blank" rel="noopener noreferrer" className="social-btn">
            <MdFacebook />
          </a>
          <a href="https://instagram.com/azfarxx_" target="_blank" rel="noopener noreferrer" className="social-btn">
            <AiFillInstagram />
          </a>
        </div>

        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="https://drive.google.com/file/d/1WNwGDVlbzHmBlCEHXIJWPp8dZVeahU92/view?usp=drive_link" className="primary-btn">
            Download Resume
          </a>
          <a href="#" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
