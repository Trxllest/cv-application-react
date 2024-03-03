/* eslint-disable react/prop-types */
import { useState } from "react";

function EduForm({
  onCloseForm,
  prevList,
  setList,
  initialData,
  inEditMode = false
}) {
  const [newEdu, setNewEdu] = useState(inEditMode ? initialData : {
    school: "",
    eduTitle: "",
    eduStart: "",
    eduEnd: "",
    eduId: crypto.randomUUID(),
  });

  let handleSchool = (e) => {
    setNewEdu((newEdu) => ({
      ...newEdu,
      school: e.target.value,
    }));
  };
  let handleTitle = (e) => {
    setNewEdu((newEdu) => ({
      ...newEdu,
      eduTitle: e.target.value,
    }));
  };
  let handleStart = (e) => {
    setNewEdu((newEdu) => ({
      ...newEdu,
      eduStart: e.target.value,
    }));
  };
  let handleEnd = (e) => {
    setNewEdu((newEdu) => ({
      ...newEdu,
      eduEnd: e.target.value,
    }));
  };

  function handleSave(newEd) {
    // Update the education list with the edited education item
    const updatedList = prevList.map((edu) =>
      edu.eduId === newEdu.eduId ? newEd : edu
    );
    setList(updatedList);
  }

  const clearForm = () => {
    document.getElementById("education-form").reset();
  };

  let saveEdu = () => {
    if (
      newEdu.school === "" ||
      newEdu.eduTitle === "" ||
      !newEdu.eduStart ||
      !newEdu.eduEnd
    ) {
      alert("Missing Fields");
      return;
    }
    if (newEdu.eduEnd < newEdu.eduStart) {
      alert("End date must be after start date");
      setNewEdu((newEdu) => ({
        ...newEdu,
        eduEnd: null,
      }));
      return;
    }

    if (inEditMode) {
      handleSave(newEdu)
      console.log(`Education saved \n ${JSON.stringify(newEdu)}`);
    } else {
      setList([...prevList, newEdu]);
      console.log(`Education added \n ${JSON.stringify(newEdu)}`);
    }

    

    clearForm();
    setNewEdu({
      school: "",
      eduTitle: "",
      eduStart: null,
      eduEnd: null,
      eduId: crypto.randomUUID(),
    });
    onCloseForm(); // Close the form after saving or updating
  };

  return (
    <>
      <form id="education-form">
        <label htmlFor="">School: </label>
        <input type="text" onChange={handleSchool} value={newEdu.school}/>
        <label htmlFor="">Degree/Diploma: </label>
        <input type="text" onChange={handleTitle} value={newEdu.eduTitle}/>
        <label htmlFor="">Start: </label>
        <input type="date" onChange={handleStart} value={newEdu.eduStart}/>
        <label htmlFor="">End: </label>
        <input type="date" onChange={handleEnd} value={newEdu.eduEnd}/>
      </form>
      <button onClick={saveEdu}>Save</button>
    </>
  );
}

export default EduForm;
