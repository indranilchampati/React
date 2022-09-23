import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    Email: "",
    password: "",
    confirmPassword: "",
    isNewsLetter: true,
  });

  // console.log(formData);

  function handleNameChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="form-inputs"
        type="email"
        placeholder="Email"
        name="Email"
        onChange={handleNameChange}
        value={formData.Email}
        required
      />
      <br />
      <br />
      <input
        className="form-inputs"
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleNameChange}
        value={formData.password}
        required
      />
      <br />
      <br />
      <input
        className="form-inputs"
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        onChange={handleNameChange}
        value={formData.confirmPassword}
        required
      />
      <br />
      <br />

      <input
        className="checkbox"
        type="checkbox"
        id="isNewsLetter"
        checked={formData.isNewsLetter}
        onChange={handleNameChange}
        name="isNewsLetter"
      />
      <label className="condition" htmlFor="isNewsLetter">
        {" "}
        I want to Join Newsletter{" "}
      </label>

      <br />
      <br />
      <button className="form-submit" type="submit">
        SignUp
      </button>
    </form>
  );
}
