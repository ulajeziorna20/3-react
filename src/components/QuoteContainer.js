import React, { useEffect, useState } from "react";
import './css/QuoteContainer.css'

// import Axios library
import axios from "axios";


const QuoteContainer = (props) => {

  const [quotes, setQuotes] = useState([])
  const [randomQuotes, setRandomQuotes] = useState([])
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)



  useEffect(() => {

    getQuotes()
  }, []);


  // console.log(randomQuote);


  const getQuotes = () => {

    axios.get('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json', {
      mode: 'corse'
    })
      .then(res => {

        const arrQuotes = res.data;

        let firstRandomIndex = Math.floor(Math.random() * arrQuotes.length);
        // console.log(firstRandomIndex);

        setRandomQuotes((prevRandomQuotes) => {

          console.log(prevRandomQuotes);
          return prevRandomQuotes.concat(arrQuotes[firstRandomIndex])
        })

      
        // console.log(arrQuotes);
     
        setQuotes(arrQuotes)
      })
  }



  // const nextQuote = () => {

  //   setCurrentQuote(randomQuote)

  //   let nextRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  //   setRandomQuote(nextRandomQuote)

  // }

  // let randomQuotesJSX = randomQuote.map((ele) => {
  //   return (
  //   <span id="span-random-quote" key={ele.key}>{ele.quote}<span>{ele.author}</span></span>
  //   )
  // })


  const randomQuote = randomQuotes[currentQuoteIndex]
console.log(randomQuote);


  return (
    <section className="quote-main-container river">
      <div className="random-quote-containter">
        {/* <span id="span-random-quote">{randomQuote.quote}</span> */}
        {/* <span id="span-random-quote">{randomQuote.quote}</span> */}
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