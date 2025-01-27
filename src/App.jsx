import "./App.css";
import UsersList from "./UsersList";
import DisplayUserData from "./DisplayUserData";
import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    select: "",
  });

  const [formDataArray, setFormDataArray] = useState([]);
  return (
    <>
      <UsersList
        formData={formData}
        setFormData={setFormData}
        formDataArray={formDataArray}
        setFormDataArray={setFormDataArray}
      />
      <DisplayUserData
        formDataArray={formDataArray}
        setFormDataArray={setFormDataArray}
      />
    </>
  );
}

export default App;
