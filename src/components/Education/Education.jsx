import EduForm from "./EduForm";
import { useState } from "react";

function Education() {
  //States//////////////////////////////////////////
  const [eduList, setEduList] = useState([]);
  const [showForm, setShowForm] = useState(false); // showing the form?
  const [eduToEdit, setEduToEdit] = useState(null); //
  const [editEdu, setEditEdu] = useState(null);
  ////////////////////////////////////////////////

  const handleCloseForm = () => {
    setShowForm(false);
    setEduToEdit(null); // Clear the education item being edited
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
      setEduToEdit(education); // Set the education item being edited
    }

    function handleSave(newEdu) {
      // Update the education list with the edited education item
      const updatedList = eduList.map((edu) =>
        edu.eduId === newEdu.eduId ? newEdu : edu
      );
      setEduList(updatedList);
      setShowForm(false); // Exit edit mode
      setEduToEdit(null); // Clear the education item being edited
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
  return <ShowEduPreview list={eduList} />

}

export default Education;
