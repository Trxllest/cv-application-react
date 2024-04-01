import EduForm from "./EduForm";
import { useState } from "react";

function Education({list, setList}) {
  //States//////////////////////////////////////////
  const [showForm, setShowForm] = useState(false); // showing the form?
  const [eduToEdit, setEduToEdit] = useState(null); // what are we editing
  const [editEdu, setEditEdu] = useState(null); // are we in edit mode
  ////////////////////////////////////////////////

  const handleCloseForm = () => {
    setShowForm(false);
    setEduToEdit(null); // Clear the education item being edited
    setEditEdu(false);
  };

  
  const handleAddEducation = (newEdu) => {
    if (editEdu) {
      // If in edit mode, find the index of the edited education entry
      const index = list.findIndex((edu) => edu.eduId === newEdu.eduId);
      if (index !== -1) {
        // Create a copy of the education list
        const updatedList = [...list];
        // Replace the existing entry with the edited one
        updatedList[index] = newEdu;
        // Update the education list state
        setList(updatedList);
      }
    } else {
      // If not in edit mode, add the new education entry to the list
      setList([...list, newEdu]);
    }
    handleCloseForm(); // Close the form after adding/editing education
  };

  function ShowEduPreview(props) {
    const deleteEdu = (key) => {
      const newList = list.filter((edu) => edu.eduId !== key);
      return newList;
    };

    const handleDelete = (eduId) => {
      const newEduList = deleteEdu(eduId);
      setList(newEduList);
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
          prevList={list}
          setList={setList}
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
          prevList={list}
          setList={setList}
          onCloseForm={handleCloseForm}
          onAddEducation={handleAddEducation} // Pass handleAddEducation function to EduForm
        />
      </div>
    );
  }
  // Otherwise, render ShowEduPreview
  return <ShowEduPreview list={list} />;
}

export default Education;
