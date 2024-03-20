import EduForm from "./EduForm";
import { useState } from "react";

function Education({list=[], setList}) {
  //States//////////////////////////////////////////
  const [eduList, setEduList] = useState(list);
  const [showForm, setShowForm] = useState(false); // showing the form?
  const [eduToEdit, setEduToEdit] = useState(null); // what are we editing
  const [editEdu, setEditEdu] = useState(null); // are we in edit mode
  ////////////////////////////////////////////////

  const handleCloseForm = () => {
    setShowForm(false);
    setEduToEdit(null); // Clear the education item being edited
    setEditEdu(false);
  };

  function ShowEduPreview(props) {
    const deleteEdu = (key) => {
      const newList = eduList.filter((edu) => edu.eduId !== key);
      return newList;
    };

    const handleDelete = (eduId) => {
      setEduList(deleteEdu(eduId));
    };

    function handleEdit(education) {
      setShowForm(true);
      setEditEdu(true);
      setEduToEdit(education); // Set the education item being edited
    }

    return (
      <>
        {props.list.map((edu) => (
          <div key={edu.eduId}>
            <p>{edu.school}</p>
            <p>{edu.eduTitle}</p>
            <p>{edu.eduStart}</p>
            <p>{edu.eduEnd}</p>
            <button onClick={() => handleEdit(edu)}>Edit</button>
            <button onClick={() => handleDelete(edu.eduId)}>Delete</button>
          </div>
        ))}
        <button onClick={() => setShowForm(true)}>+ Education</button>
      </>
    );
  }

  if (showForm && editEdu) {
    // Render EduForm for editing if in edit mode
    return (
      <div>
        <EduForm
          prevList={eduList}
          setList={setEduList}
          initialData={eduToEdit} // Pass the data of the education item being edited
          onCloseForm={handleCloseForm}
          inEditMode={true}
        />
      </div>
    );
  } else if (showForm) {
    //adding new education without editing
    return (
      <div>
        <EduForm
          prevList={eduList}
          setList={setEduList}
          onCloseForm={handleCloseForm}
        />
      </div>
    );
  }
  // Otherwise, render ShowEduPreview
  return <ShowEduPreview list={eduList} />;
}

export default Education;
