import { useState } from "react";
import WorkExperienceForm from "./WorkForm";

function WorkExperience({ list, setList }) {
  //States//////////////////////////////////////////
  const [showForm, setShowForm] = useState(false); // showing the form?
  const [expToEdit, setExpToEdit] = useState(null); // what are we editing
  const [editExp, setEditExp] = useState(null); // are we in edit mode
  ////////////////////////////////////////////////

  const handleCloseForm = () => {
    setShowForm(false);
    setExpToEdit(null);
    setEditExp(false);
  };

  const handleAddWork = (newWork) => {
    if (editExp) {
      // If in edit mode, find the index of the edited 
      const index = list.findIndex((work) => work.expId === newWork.expId);
      if (index !== -1) {
        // Create a copy
        const updatedList = [...list];
        // Replace the existing entry with the edited one
        updatedList[index] = newWork;
        // Update the education list state
        setList(updatedList);
      }
    } else {
      
      setList([...list, newWork]);
    }
    handleCloseForm(); // Close the form after adding/editing 
  };

  function ShowExpPreview(props) {
    const deleteExp = (key) => {
      const newList = list.filter((exp) => exp.expId !== key);
      return newList;
    };

    const handleDelete = (expId) => {
      const newExp = deleteExp(expId);
      setList(newExp);
    };

    function handleEdit(experience) {
      setShowForm(true);
      setEditExp(true);
      setExpToEdit(experience); // Set the experience item being edited
    }

    return (
      <>
        {props.list.map((exp) => (
          <div key={exp.expId}>
            <p>{exp.company}</p>
            <p>{exp.position}</p>
            <p>{exp.description}</p>
            <p>{exp.expStart}</p>
            <p>{exp.expEnd}</p>
            <button onClick={() => handleEdit(exp)}>Edit</button>
            <button onClick={() => handleDelete(exp.expId)}>Delete</button>
          </div>
        ))}
        <button onClick={() => setShowForm(true)}>+ Experience</button>
      </>
    );
  }

  if (showForm && editExp) {
    // Render expForm for editing if in edit mode
    return (
      <div>
        <WorkExperienceForm
          prevList={list}
          setList={setList}
          initialData={expToEdit} // Pass the data of the exp item being edited
          onCloseForm={handleCloseForm}
          inEditMode={true}
        />
      </div>
    );
  } else if (showForm) {
    //adding new expcation without editing
    return (
      <div>
        <WorkExperienceForm
          prevList={list}
          setList={setList}
          onCloseForm={handleCloseForm}
          onAddWork={handleAddWork}
        />
      </div>
    );
  }
  // Otherwise, render ShowexpPreview
  return <ShowExpPreview list={list} />;
}

export default WorkExperience;
