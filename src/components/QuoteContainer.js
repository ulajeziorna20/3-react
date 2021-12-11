import React, { useEffect, useState } from "react";
import './css/QuoteContainer.css'

// import Axios library
import axios from "axios";


const QuoteContainer = (props) => {

  const [quotes, setQuotes] = useState([])
  const [randomQuote, setRandomQuote] = useState([])
  const [currentQuote, setCurrentQuote] = useState(0)



  useEffect(() => {

    getQuote()
    console.log(quotes);

    // let firstRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    // console.log(firstRandomQuote);

    // setRandomQuote([firstRandomQuote])

  }, []);


  // console.log(randomQuote);


  const getQuote = () => {

    axios.get('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json', {
      mode: 'corse'
    })
      .then(res => {

        const arrQuotes = res.data;
        // console.log(arrQuotes);
        let newArrQuotes = [];
        
        for (const [index, quoteObj] of Object.entries(arrQuotes)) {

          let newObj = {
            key: (Date.now() + index),
            quote: quoteObj.quote,
            author: quoteObj.author
          }
          newArrQuotes.push(newObj) 
        }
        setQuotes(newArrQuotes)
      })
  }



  // const nextQuote = () => {

  //   setCurrentQuote(randomQuote)

  //   let nextRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  //   setRandomQuote(nextRandomQuote)

  // }

    // const randomQuoteJSX = randomQuote.map((ele, i) => {
    //   return (
    //   <span id="span-random-quote" key={Date.now + i}>{ele.quote}<span>{ele.author}</span></span>
    //   )
    // })
  
  



  return (
    <section className="quote-main-container river">
      <div className="random-quote-containter">
        {/* {randomQuoteJSX} */}
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