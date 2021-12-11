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


  const getQuotes = () => {

    axios.get('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json', {
      mode: 'corse'
    })
      .then(res => {
        const arrQuotes = res.data;

        let firstRandomIndex = Math.floor(Math.random() * arrQuotes.length);

        setRandomQuotes((prevRandomQuotes) => {

          return prevRandomQuotes.concat(arrQuotes[firstRandomIndex])
        })
        setQuotes(arrQuotes)
      })
  }



  const nextQuote = () => {

    let randomIndex = Math.floor(Math.random() * quotes.length);

    setRandomQuotes((prevRandomQuotes) => {

      // console.log(prevRandomQuotes);
      return prevRandomQuotes.concat(quotes[randomIndex])
    })
    setCurrentQuoteIndex(currentQuoteIndex + 1)
  }



  // Wyświetlanie cytatu na stronie 
  const randomQuote = randomQuotes[currentQuoteIndex]

  let quote = 'no quote'
  if (randomQuote) {
    quote = (
      <div className='random-quote-containter'>
        <span id='span-random-quote'>{randomQuote.quote}</span>
        <span id='span-random-quote'>{randomQuote.author}</span>
      </div>
    )
  }
  // console.log(randomQuote)

  return (
    <section className='quote-main-container river'>
      {quote}
      <div className='btn-container'>
        <button className='btn-next-quote' onClick={nextQuote}>Next quote!</button>
        <button className='btn-container'>Previous quote</button>
      </div>
    </section>
  )
}


export default QuoteContainer;