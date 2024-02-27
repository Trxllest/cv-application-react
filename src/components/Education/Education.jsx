import EduForm from "./EduForm";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Education() {

  const eduExample = {
    school: 'Harvard University',
    eduTitle: "BSc. Chemistry",
    eduStart: "2001-03-25",
    eduEnd: "2005-03-25",
    eduId: uuidv4()
  }

  const [eduList, setEduList] = useState([eduExample])



  function showEduPreview(props) {
    return (
      props.eduList.map((edu) => 
        <div key={edu.eduId}>
          <p>{edu.school}</p>
          <p>{edu.eduTitle}</p>
          <p>{edu.eduStart}</p>
          <p>{edu.eduEnd}</p>
        </div>  
    ))
  }

  return (
    <div>
      <EduForm prevList={eduList} setList={setEduList} isSaved={false} setIsSaved={null} />
    </div>
  )
}

export default Education;
