import { useState } from "react";
import Section from "./components/Section";
import Info from "./components/Info";
import Education from "./components/Education/Education";
import "./App.css";
import WorkExperience from "./components/WorkExp/Work";

function App() {
  const [,] = useState();

  return (
    <>
      <Section>
        <Info />
      </Section>
      <Section>
        <Education />
      </Section>
      <Section>
        <WorkExperience/>
      </Section>
    </>
  );
}

export default App;
