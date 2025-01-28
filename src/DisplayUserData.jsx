import { useState } from "react";
import "./DisplayUserData.css";
import { useEffect } from "react";
const DisplayUserData = ({ formDataArray, setFormDataArray }) => {
  const [gather, setGather] = useState(formDataArray);

  useEffect(() => {
    setGather(formDataArray);
    console.log();
  }, [formDataArray]);

  // this filters based on the button clicked based on the value of the selection (either admin or standard) and modify the gather value with the new array

  const filterValues = (action) => {
    if (action == "admin") {
      const adminsArray = formDataArray.filter(
        (item) => item.select === "Admin"
      );
      setGather(adminsArray);
    } else if (action == "standard") {
      const standardArray = formDataArray.filter(
        (item) => item.select === "Standard"
      );
      setGather(standardArray);
    } else {
      setGather(formDataArray);
    }
  };
  // delete item by cliking on it we select the element based on the id, we find the id in the formDataArray, we create a new array copying the formDataArray, so that we can modify it, delete elements in side.
  const deleteListElement = (theId) => {
    const updatedArray = formDataArray.slice();
    updatedArray.splice(theId, 1);
    setFormDataArray(updatedArray);
    console.log(updatedArray);
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
