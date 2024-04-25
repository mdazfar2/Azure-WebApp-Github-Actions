import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover/Cover";
import coverImg from "../assets/cover.png";
import EndImg from "../assets/last-page.png";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects.jsx";

import ProjectImg1 from "../assets/projects/netflix-workflow.png";
import ProjectImg2 from "../assets/projects/3-tier.jpg";
import ProjectImg3 from "../assets/projects/azfar-script.png";
import ProjectImg4 from "../assets/projects/github-actions-eks.png";

const ProjectData = [
  {
    name: "DevSecOps: Netflix Clone",
    description: "I deploy a Netflix clone application using modern DevOps practices and tools. In this project, I leverage Jenkins for Continuous Integration and Continuous Deployment (CI/CD), Docker for containerization, and integrating different tools with each other, Kubernetes for orchestration, and monitoring tools like Grafana, Prometheus, and Node Exporter for observability.",
    image: ProjectImg1,
    previewLink: "https://github.com/mdazfar2/DevSecOps-CICD-Pipeline-NetflixClone",
  },
  {
    name: "3 Tier Wanderlust App",
    description: "Welcome to Wanderlust! This three-tier travel app, powered by React.js, Node.js, and MongoDB, is your gateway to discovering exciting destinations, seamlessly deployed on AWS and Docker! ",
    image: ProjectImg2,
    previewLink: "https://github.com/mdazfar2/three-tier-deploy-wanderlustApp",
  },
];
const ProjectData2 = [
  {
    name: "Shell Script Toolkit",
    description: "Streamline DevOps tasks with One-Click Automation scripts. Compatible with Ubuntu and Amazon Linux, this comprehensive toolkit is designed to save your time and be fast!",
    image: ProjectImg3,
    previewLink: "https://github.com/mdazfar2/ShellScript-Toolkit",
  },
  {
      name: "Github-Actions | EKS-CICD | Cafe-Coffee",
    description: "This project aims to streamline the deployment pipeline for a MERN (MongoDB, Express.js, React.js, Node.js) web application using a DevOps approach. By leveraging GitHub Actions, Docker, Terraform, and SonarQube, we've crafted an automated Continuous Integration/Continuous Deployment (CI/CD) pipeline that ensures efficiency, reliability, and quality in deploying your MERN web application to Amazon Elastic Kubernetes Service (EKS).",
    image: ProjectImg4,
    previewLink: "https://github.com/mdazfar2/Github-Actions-EKS-CICD-Cafe-Coffee/",
  },
];

function MyBook(props) {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="My Portfolio" />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <Skills />
      </Page>
      <Page number={4}>
        <Services />
      </Page>
      <Page number={5}>
        <About />
      </Page>
      <Page number={6}>
        <Projects ProjectData={ProjectData} />
      </Page>
      <Page number={7}>
        <Projects ProjectData={ProjectData2} />
      </Page>
      <Page number={8}>
        <Cover coverImg={EndImg} title="Thanks" />
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;