import "./UsersList.css";

const UsersList = ({
  formData,
  setFormData,
  formDataArray,
  setFormDataArray,
}) => {
  // get the data from the form input

  const getFormData = (e) => {
    const target = e.target;
    const nameInput = target.name;

    setFormData((previousData) => {
      return { ...previousData, [nameInput]: target.value };
    });
  };

  // save the data in an array by updating that array with the new values
  const saveData = (e) => {
    e.preventDefault();
    const theId = formDataArray.length;
    const updatedData = { ...formData, id: theId };
    setFormDataArray((prev) => {
      return [...prev, updatedData];
    });
  };

  return (
    <div className="usersList">
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="User name"
          onChange={getFormData}
        />

        <label htmlFor="username">Email:</label>

        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={getFormData}
        />

        <select name="select" id="" onChange={getFormData}>
          <option value="Admin">Admin</option>
          <option value="Standard">Standard</option>
        </select>

        <button onClick={saveData}>Save</button>
      </form>
    </div>
  );
};

export default UsersList;
