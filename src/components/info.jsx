import { useState } from "react";

function Info({prevPerson, setNewPerson}) {
  const [person, setPerson] = useState(prevPerson);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setPerson((prevPerson) => ({
      ...prevPerson,
      name: newName,
    }));
    setNewPerson({ ...person, name: newName }); // Pass the updated person object
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setPerson((prevPerson) => ({
      ...prevPerson,
      email: newEmail,
    }));
    setNewPerson({ ...person, email: newEmail }); // Pass the updated person object
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPerson((prevPerson) => ({
      ...prevPerson,
      phone: newPhone,
    }));
    setNewPerson({ ...person, phone: newPhone }); // Pass the updated person object
  };

  return (
    <form>
      <label htmlFor="">Name: </label>
      <input
        type="text"
        value={person.name}
        placeholder={person.name}
        onChange={handleNameChange}
      />
      
      <label htmlFor="">Email: </label>
      <input
        type="email"
        value={person.email}
        placeholder={person.email}
        onChange={handleEmailChange}
      />
      <label htmlFor="">Phone Number: </label>
      <input
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        value={person.phone}
        placeholder={person.phone}
        onChange={handlePhoneChange}
      />
    </form>
  );
}

export default Info;
