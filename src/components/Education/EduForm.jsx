import { useState } from "react";

function EduForm({ prevList, setList, isSaved, setIsSaved }) {
  const [newEdu, setNewEdu] = useState({
    school: "",
    eduTitle: "",
    eduStart: null,
    eduEnd: null,
    eduId: "",
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
  let handleID = async () => {
    const updatedEduId = crypto.randomUUID();
    console.log(`UUID is: ${updatedEduId}`);
    setNewEdu((newEdu) => ({
      ...newEdu,
      eduId: updatedEduId,
    }));
    console.log(`Education saved \n ${JSON.stringify(newEdu)}`);
  };

  let saveEdu = async () => {
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

    await handleID();
    setList([...prevList, newEdu]);
    console.log(`Education saved \n ${JSON.stringify(newEdu)}`);
  };

  return (
    <>
      <form>
        <label htmlFor="">School: </label>
        <input type="text" onChange={handleSchool} />
        <label htmlFor="">Degree/Diploma: </label>
        <input type="text" onChange={handleTitle} />
        <label htmlFor="">Start: </label>
        <input type="date" onChange={handleStart} />
        <label htmlFor="">End: </label>
        <input type="date" onChange={handleEnd} />
      </form>
      <button onClick={saveEdu}>Save</button>
    </>
  );
}

export default EduForm;
