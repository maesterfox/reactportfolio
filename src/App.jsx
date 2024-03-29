import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Analytics } from "@vercel/analytics/react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className={`App ${isLoading ? "loading" : ""}`}>
      {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}
      <NavBar />
      <Banner isLoading={isLoading} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
