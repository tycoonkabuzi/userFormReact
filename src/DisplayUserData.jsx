import { useState } from "react";
import "./DisplayUserData.css";
const DisplayUserData = ({ formDataArray, setFormDataArray }) => {
  //console.log(Array.isArray(formDataArray));
  const [gather, setGather] = useState([]);
  const deleteListElement = (theIndex) => {
    const updatedArray = formDataArray.slice();
    updatedArray.splice(theIndex, 1);
    setFormDataArray(updatedArray);
  };
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
      gather(formDataArray);
    }
  };
  return (
    <div className="main">
      <button onClick={() => filterValues("admin")}>Show only admins</button>
      <button onClick={() => filterValues("standard")}>Show only users</button>
      <button>Show all</button>
      {gather.map((formElement, index) => (
        <div
          className="main-list"
          key={index}
          onClick={() => deleteListElement(index)}
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
