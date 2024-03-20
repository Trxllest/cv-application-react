import { useState } from "react";
import Section from "./components/Section";
import Info from "./components/Info";
import Education from "./components/Education/Education";
import "./App.css";
import WorkExperience from "./components/WorkExp/Work";
import {PreviewEducation, PreviewWork} from "./components/Previews";

function App() {
  const defaultUserInfo = {
    name: "John Doe",
    email: "example@gmail.com",
    phone: "123-456-7890",
  };


  const [userInfo, setUserInfo] = useState(defaultUserInfo);
  const [userEducationInfo, setEducationInfo] = useState([]);
  const [userWorkInfo, setWorkInfo] = useState([]);

  return (
    <>
      <Section>
        <Info prevPerson={userInfo} setNewPerson={setUserInfo} />
      </Section>
      <Section>
        <Education list={userEducationInfo} setList={setEducationInfo}/>
      </Section>
      <Section>
        <WorkExperience list={userWorkInfo} setList={setWorkInfo}/>
      </Section>
      <div id="preview">
        <div className="section">
          <h1>{userInfo.name}</h1>
          <h1>{userInfo.email}</h1>
          <h1>{userInfo.phone}</h1>
        </div>
        <div className="section">
          <PreviewWork workInfo={userWorkInfo}/>
        </div>
        <div className="section">
          <PreviewEducation educationInfo={userEducationInfo} />
        </div>
      </div>
    </>
  );
}

export default App;
