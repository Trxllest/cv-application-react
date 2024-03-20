import { Fragment } from "react";

function PreviewEducation({ educationInfo }) {
  if (!educationInfo || educationInfo.length === 0) {
    return <p>No education information available.</p>;
  }
  return educationInfo.map((edu) => (
    <div key={edu.eduId}>
      <p>{edu.school}</p>
      <p>{edu.eduTitle}</p>
      <p>{edu.eduStart}</p>
      <p>{edu.eduEnd}</p>
    </div>
  ));
}

function PreviewWork({ workInfo }) {
  if (!workInfo || workInfo.length === 0) {
    return <p>No work experience information available.</p>;
  }
  return workInfo.map((exp) => (
    <div key={exp.expId}>
      <p>{exp.company}</p>
      <p>{exp.position}</p>
      <p>{exp.description}</p>
      <p>{exp.expStart}</p>
      <p>{exp.expEnd}</p>
    </div>
  ));
}

export { PreviewEducation, PreviewWork };
