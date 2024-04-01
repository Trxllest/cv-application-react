import { useState } from "react";

function WorkExperienceForm({
  onCloseForm,
  prevList,
  setList,
  onAddWork,
  initialData,
  inEditMode = false,
}) {
  const [newExp, setNewExp] = useState(
    inEditMode
      ? initialData
      : {
          company: "",
          position: "",
          description: "", 
          expStart: "",
          expEnd: "",
          expId: crypto.randomUUID(),
        }
  );

    let handleCompany = (e) => {
      setNewExp((newExp) => ({
        ...newExp,
        company: e.target.value,
      }));
    };
    let handlePosition = (e) => {
      setNewExp((newExp) => ({
        ...newExp,
        position: e.target.value,
      }));
    };
    let handleDescription = (e) => {
      setNewExp((newExp) => ({
        ...newExp,
        description: e.target.value,
      }));
    };
    let handleStart = (e) => {
      setNewExp((newExp) => ({
        ...newExp,
        expStart: e.target.value,
      }));
    };
    let handleEnd = (e) => {
      setNewExp((newExp) => ({
        ...newExp,
        expEnd: e.target.value,
      }));
    };

    const handleSave = () => {
      // Handle saving 
      if (inEditMode) {
        const updatedList = prevList.map((edu) =>
          edu.eduId === newExp.eduId ? newExp : edu
        );
        setList(updatedList);
      } else {
        onAddWork(newExp); // Call onAddWork function to add
      }
    };

    const clearForm = () => {
      document.getElementById("experience-form").reset();
    };

    let saveExp = () => {
      if (
        newExp.position === "" ||
        newExp.company === "" ||
        !newExp.expStart ||
        !newExp.expEnd
      ) {
        alert("Missing Fields");
        return;
      }
      if (newExp.expEnd < newExp.expStart) {
        alert("End date must be after start date");
        setNewExp((newExp) => ({
          ...newExp,
          expEnd: null,
        }));
        return;
      }

      handleSave();

      clearForm();
      setNewExp({
        company: "",
        position: "",
        description: "",
        expStart: "",
        expEnd: "",
        expId: crypto.randomUUID(),
      });
      onCloseForm(); // Close the form after saving or updating
    };

    return (
      <>
        <form id="experience-form">
          <label htmlFor="">Company: </label>
          <input type="text" onChange={handleCompany} value={newExp.company} />
          <label htmlFor="">Position: </label>
          <input type="text" onChange={handlePosition} value={newExp.position} />
          <label htmlFor="">Description: </label>
          <input type="text" onChange={handleDescription} value={newExp.description} />
          <label htmlFor="">Start: </label>
          <input type="date" onChange={handleStart} value={newExp.expStart} />
          <label htmlFor="">End: </label>
          <input type="date" onChange={handleEnd} value={newExp.expEnd} />
        </form>
        <button onClick={saveExp}>Save</button>
      </>
    );

}

export default WorkExperienceForm;
