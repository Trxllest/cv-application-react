import { useState } from "react";
import WorkExperienceForm from "./WorkForm";

function WorkExperience({list = [], setList}) {
  //States//////////////////////////////////////////
  const [expList, setExpList] = useState([]);
  const [showForm, setShowForm] = useState(false); // showing the form?
  const [expToEdit, setExpToEdit] = useState(null); // what are we editing
  const [editExp, setEditExp] = useState(null); // are we in edit mode
  ////////////////////////////////////////////////

  const handleCloseForm = () => {
    setShowForm(false);
    setExpToEdit(null);
    setEditExp(false)
  };

  function ShowExpPreview(props) {

    const deleteExp = (key) => {
      const newList = expList.filter((exp) => exp.expId !== key);
      return newList;
    };

    const handleDelete = (expId) => {
      setExpList(deleteExp(expId));
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
          prevList={expList}
          setList={setExpList}
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
          prevList={expList}
          setList={setExpList}
          onCloseForm={handleCloseForm}
        />
      </div>
    );
  }
  // Otherwise, render ShowexpPreview
  return <ShowExpPreview list={expList} />;










}

export default WorkExperience;