import EduForm from "./EduForm";
import { useState } from "react";

function Education() {
//   const eduExample = {
//     school: "Harvard University",
//     eduTitle: "BSc. Chemistry",
//     eduStart: "2001-03-25",
//     eduEnd: "2005-03-25",
//     eduId: crypto.randomUUID(),
//   };

  const [eduList, setEduList] = useState([]);

  function showEduPreview(props) {
    return props.eduList.map((edu) => (
      <div key={edu.eduId}>
        <p>{edu.school}</p>
        <p>{edu.eduTitle}</p>
        <p>{edu.eduStart}</p>
        <p>{edu.eduEnd}</p>
      </div>
    ));
  }

  return (
    <div>
      <EduForm
        prevList={eduList}
        setList={setEduList}
        isSaved={false}
        setIsSaved={null}
      />
      <console className="log">{JSON.stringify(eduList)}</console>
    </div>
  );
}

export default Education;
