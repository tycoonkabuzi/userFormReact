import "./DisplayUserData.css";
const DisplayUserData = ({ formDataArray }) => {
  console.log(formDataArray[1]);
  return formDataArray.map((formElement, index) => (
    <div className="main" key={index}>
      <p>Username: {formElement.username}</p>
      <p>Email: {formElement.email} </p>
      <p>Account Type: {formElement.select}</p>
    </div>
  ));
};
export default DisplayUserData;
