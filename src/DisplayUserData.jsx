import { useState } from "react";
import "./DisplayUserData.css";
import { useEffect } from "react";
const DisplayUserData = ({ formDataArray, setFormDataArray }) => {
  const [gather, setGather] = useState(formDataArray);

  useEffect(() => {
    setGather(formDataArray);
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
    }
  };
  // delete item by cliking on it we select the element based on the id, we find the id in the formDataArray, we create a new array copying the formDataArray, so that we can modify it, delete elements in side.
  const deleteListElement = (theId) => {
    const indexToDelete = formDataArray.findIndex((item) => item.id === theId);
    console.log(indexToDelete);
    if (indexToDelete !== -1) {
      const updatedArray = formDataArray.slice();
      updatedArray.splice(indexToDelete, 1);
      setFormDataArray(updatedArray);
    }
  };

  return (
    <div className="main">
      <button onClick={() => filterValues("admin")}>Show only admins</button>
      <button onClick={() => filterValues("standard")}>Show only users</button>
      <button onClick={() => filterValues()}>Show all</button>
      {gather.map((formElement) => (
        <div
          className="main-list"
          key={formElement.id}
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
