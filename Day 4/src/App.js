import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/footer";
import "./styles.css";
import data from "./data";

const cards = data.map((card) => {
  return (
    <Card
      img={`images/${card.coverImg}`}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      country={card.location}
      title={card.title}
      price={card.price}
      openSpots={card.openSpots}
      location={card.location}
    />
  );
});

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
  );
}
export default App;
