import React from "react";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite
    ? "./images/star-filled.png"
    : "./images/star-empty.png ";

  function toggleFavorite() {
    // console.log("Toggle Favorite");

    setContact((prevContact) => {
      return {
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img src="./images/user.png" className="card--image" alt="User Icon" />
        <div className="card--info">
          <img
            src={starIcon}
            className="card--favorite"
            onClick={toggleFavorite}
            alt="favorites icon"
          />
          <h2 className="card--name">John Doe</h2>
          <p className="card--contact">+1 (719) 555-1212</p>
          <p className="card--contact">itsmyrealname@example.com</p>
        </div>
      </article>
    </main>
  );
}
