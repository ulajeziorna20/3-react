import React, { useState } from "react";
import './css/QuoteContainer.css'


const QuoteContainer = (props) => {




  return (
    <section className="quote-main-container">
      <div className="random-quote-containter">
        <span id="span-random-quote"></span>
      </div>
      <div className="btn-container">
        <button className="btn-next-quote">
          Next quote!
        </button>
        <button className="btn-container">
          Previous quote 
        </button>
      </div>
    </section>
  )
}


export default QuoteContainer;