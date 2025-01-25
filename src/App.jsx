import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
        setFormDataArray={setFormDataArray}
      />
      <DisplayUserData formDataArray={formDataArray} />
    </>
  );
}

export default App;
