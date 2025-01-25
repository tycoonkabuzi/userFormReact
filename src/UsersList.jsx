import "./UsersList.css";
const UsersList = () => {
  return (
    <div className="usersList">
      <form action="">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="User name"
        />
        <label htmlFor="username">Email:</label>
        <input type="email" name="email" placeholder="Email address" />

        <button>Save</button>
      </form>
    </div>
  );
};

export default UsersList;
