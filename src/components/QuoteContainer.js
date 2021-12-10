import React, { useState } from "react";
import './css/QuoteContainer.css'

// import Axios library
import axios from "axios";


const QuoteContainer = (props) => {

  const [quote, setQuote] = useState('')



  const generateRandomQuote = (array) => {
    return Math.floor(Math.random() * (array.lenght - 0)) + 0
  }

  const getQuote = () => {

    axios.get('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json', {
      mode: 'corse'
    })
    .then(res => {
      // console.log(res);
      // console.log(res.data);
      console.log(res.data[0]);

      







      // const arrQuotes = res.data;
      // console.log(arrQuotes);

      // let newRandomQuote = generateRandomQuote(arrQuotes);
      // console.log(newRandomQuote);


    })
    
  }

  getQuote();








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