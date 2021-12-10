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

    let firstRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(firstRandomQuote);

    setRandomQuote([firstRandomQuote])
    console.log(randomQuote);
  }, []);




  const getQuote = () => {

    axios.get('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json', {
      mode: 'corse'
    })
      .then(res => {
       
        const arrQuotes = res.data;
        // console.log(arrQuotes);

        setQuotes(arrQuotes)
      })
  }


  // let randomQuoteJSX = randomQuote.map(ele => {
  //   return (
  //   <span id="span-random-quote">{ele.quote}</span>
  //   )
  // })

  // let randomQuoteAuthorJSX = randomQuote.map(ele => {
  //   return <span id="span-random-quote">{ele.author}</span>
  // })




  return (
    <section className="quote-main-container">
      <div className="random-quote-containter">
        {/* {randomQuoteJSX}
        {randomQuoteAuthorJSX} */}
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