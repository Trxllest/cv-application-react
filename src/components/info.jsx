import { useState } from "react";

function Info() {
  const [person, setPerson] = useState({
    name: "John Doe",
    email: "example@gmail.com",
    phone: "123-456-7890",
  });

  const handleNameChange = (e) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      name: e.target.value
    }));
    console.log('changed')
  };

  const handleEmailChange = (e) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      email: e.target.value
    }));
  };

  const handlePhoneChange = (e) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      phone: e.target.value
    }));
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
