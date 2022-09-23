import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    Email: "",
    Comment: "",
    isFriendly: true,
  });

  console.log(formData);

  function handleNameChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleNameChange}
        value={formData.firstName}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleNameChange}
        value={formData.lastName}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Email"
        name="Email"
        onChange={handleNameChange}
        value={formData.Email}
      />
      <br />
      <br />
      <textarea
        placeholder="Comments...."
        name="Comment"
        onChange={handleNameChange}
        value={formData.Comment}
      />
      <br />
      <br />
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleNameChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly"> Are you friendly?</label>
    </form>
  );
}
