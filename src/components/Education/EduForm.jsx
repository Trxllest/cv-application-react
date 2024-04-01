/* eslint-disable react/prop-types */
import { useState } from "react";

function EduForm({
  onCloseForm,
  prevList,
  setList,
  onAddEducation, // Receive onAddEducation function as prop
  initialData,
  inEditMode = false,
}) {
  const [newEdu, setNewEdu] = useState(
    inEditMode
      ? initialData
      : {
          school: "",
          eduTitle: "",
          eduStart: "",
          eduEnd: "",
          eduId: crypto.randomUUID(),
        }
  );

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


  const handleSave = () => {
    // Handle saving education
    if (inEditMode) {
      const updatedList = prevList.map((edu) =>
      edu.eduId === newEdu.eduId ? newEdu : edu)
      setList(updatedList);
    } else {
      onAddEducation(newEdu); // Call onAddEducation function to add new education
    }
  };

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

    handleSave();

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
        <input type="text" onChange={handleSchool} value={newEdu.school} />
        <label htmlFor="">Degree/Diploma: </label>
        <input type="text" onChange={handleTitle} value={newEdu.eduTitle} />
        <label htmlFor="">Start: </label>
        <input type="date" onChange={handleStart} value={newEdu.eduStart} />
        <label htmlFor="">End: </label>
        <input type="date" onChange={handleEnd} value={newEdu.eduEnd} />
      </form>
      <button onClick={saveEdu}>Save</button>
    </>
  );
}

export default EduForm;
