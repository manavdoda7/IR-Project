import React from "react";
import "./homepage.css";


const Homepage = () => {

  return (
    <>
      <div className="body-background">
        <div className="xyz">
          <div className="search-bar">
            {/* <button className="button-styling">Recall</button>
            <button className="button-styling">Boolean</button>
            <button className="button-styling">Retreival</button> */}
            <button className="button-styling">Design systems</button>
            <button className="button-styling">Tokenization</button>
            <button className="button-styling">Normalization</button>
            <button className="button-styling">Biword</button>
            <button className="button-styling">Stemming</button>
            <button className="button-styling">Hash Tables</button>
            <button className="button-styling">Soundex</button>
            <button className="button-styling">Explore</button>
          </div>
          <h1>What are you looking for?</h1>
          <input
            className="home-body-input"
            type="text"
            placeholder="Search here"
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
