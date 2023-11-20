import React from "react";
import "../App.css";

const Forms = () => {
  // create and initialize input fields using State Management
  // formData is getter, getFormData is setter

  const [formData, setFormData] = React.useState({
    // initial values within fields are empty strings
    fullName: "",
    userName: "",
    email: "",
    address: "",
    phoneNum: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      // spread operator copies current formData state
      ...formData,
      // sets the value found in input fields with 'name' attribute
      [name]: value,
    });
  }

  function handleSubmit(e) {
    // prevent reset of fields upon submit
    e.preventDefault();
    // output to the console log
    console.log(formData);
  }

  return (
    <div>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">Enter your full name:</label>
        </div>
        <div>
          <input
            type="text"
            name="fullName"
            // uses the getter function and retrieves the value of fullName
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="usernameInput">Enter desired username:</label>
        </div>
        <div>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nameInput">Enter your email:</label>
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nameInput">Enter your address:</label>
        </div>
        <div>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nameInput">Enter your phone number:</label>
        </div>
        <div>
          <input
            type="text"
            name="phoneNum"
            value={formData.phoneNum}
            onChange={handleChange}
          />
        </div>
        <div className="btn">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
