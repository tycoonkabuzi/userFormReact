import { useState } from "react";
import "./DisplayUserData.css";
import { useEffect } from "react";
const DisplayUserData = ({ formDataArray, setFormDataArray }) => {
  //console.log(Array.isArray(formDataArray));
  const [gather, setGather] = useState(formDataArray);

  useEffect(() => {
    setGather(formDataArray);
    console.log();
  }, [formDataArray]);
  console.log(formDataArray);
  const filterValues = (action) => {
    if (action == "admin") {
      const adminsArray = formDataArray.filter(
        (item) => item.select === "Admin"
      );
      setGather(adminsArray);
    } else if (action == "standard") {
      const adminsArray = formDataArray.filter(
        (item) => item.select === "Standard"
      );
      setGather(adminsArray);
    } else {
      setGather(formDataArray);
    }
  };
  const deleteListElement = (theId) => {
    const updatedArray = formDataArray.slice();
    updatedArray.splice(theId, 1);
    setFormDataArray(updatedArray);
    console.log(updatedArray);
    console.log(theId);
  };
  return (
    <div className="main">
      <button onClick={() => filterValues("admin")}>Show only admins</button>
      <button onClick={() => filterValues("standard")}>Show only users</button>
      <button onClick={filterValues}>Show all</button>
      {gather.map((formElement, index) => (
        <div
          className="main-list"
          key={index}
          onClick={() => deleteListElement(formElement.id)}
        >
          <p>Username: {formElement.username}</p>
          <p>Email: {formElement.email} </p>
          <p>Account Type: {formElement.select}</p>
        </div>
      ))}
    </div>
  );
};
export default DisplayUserData;
