import React, { useEffect, useState } from "react";
import headerImg from "../assets/img/superme.png";
import SpeechBubbleModal from "./SpeechBubbleModal"; // Adjust the import based on your file structure

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const response = await fetch("/quotes.json");
        const data = await response.json();

        // Get the array of quotes from the JSON data
        const quotes = data.quotes;

        // Get a random index
        const randomIndex = Math.floor(Math.random() * quotes.length);

        // Set the random quote to the state
        setQuote(quotes[randomIndex]);

        // Log the fetched quote to the console
        console.log("Fetched quote:", quotes[randomIndex]);

        // Show the modal
        setShowModal(true);
      } catch (error) {
        console.error("Error fetching random quote:", error);
        setQuote("Error fetching quote");
      }
    };

    // Attach the event listener when the component mounts
    const imageElement = document.getElementById("headerImg");
    imageElement.addEventListener("click", fetchRandomQuote);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      imageElement.removeEventListener("click", fetchRandomQuote);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const handleClose = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <div>
      {/* Trigger the fetchRandomQuote function when the image is clicked */}
      <img src={headerImg} alt="Header Img" id="headerImg" />

      {/* Display the modal if a quote is available */}
      {quote && (
        <SpeechBubbleModal
          text={quote}
          showModal={showModal}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default Quotes;
