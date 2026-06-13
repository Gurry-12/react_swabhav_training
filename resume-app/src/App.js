
import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import resumeData from "./data/resumeData";

import "./App.css";

function App() {
  return (
    <div className="resume">
      <Header info={resumeData.personalInfo} />

      <Summary summary={resumeData.summary} />

      <Education education={resumeData.education} />

      <Experience experience={resumeData.experience} />

      <Projects projects={resumeData.projects} />

      <Skills skills={resumeData.skills} />
    </div>
  );
}

export default App;