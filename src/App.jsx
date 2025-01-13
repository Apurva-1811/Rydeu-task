import React from "react";
import Header from "./components/Header";
import CardSection from "./components/CardSection";
import AccordionSection from "./components/AccordionSection";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <CardSection />
        <AccordionSection />
      </main>
    </div>
  );
}

export default App;
