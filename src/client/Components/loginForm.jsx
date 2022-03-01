import react from "react";


const loginForm = () => {
  return (
    <div className="myLoginContainer">
      <h1>Enter Login details</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="Submit">Submit</button>
        </div>
      </form>
    </div>
   
  );
};

export default loginForm;
