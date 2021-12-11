import React, { useEffect, useState } from "react";
import './css/QuoteContainer.css'

// import Axios library
import axios from "axios";


const QuoteContainer = (props) => {

  const [quotes, setQuotes] = useState([])
  const [randomQuotes, setRandomQuotes] = useState([])
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [disabled, setDisabled] = useState(true)


  useEffect(() => {

    getQuotes()
  }, []);


  // axios 
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


  // Przycisk następny cytat
  const nextQuote = () => {

    let randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuotes((prevRandomQuotes) => {

      return prevRandomQuotes.concat(quotes[randomIndex])
    })
    setCurrentQuoteIndex(currentQuoteIndex + 1)
    setDisabled(false)
  }


  // Przycisk poprzedni cytat
  const prevQuote = () => {

    if (currentQuoteIndex === 1) {
      setCurrentQuoteIndex(currentQuoteIndex - 1)
      setDisabled(true)
    } else if (currentQuoteIndex > 1) {
      setCurrentQuoteIndex(currentQuoteIndex - 1)
    }
  }


  // Wyświetlanie cytatu na stronie 
  const randomQuote = randomQuotes[currentQuoteIndex]

  let quote = 'no quote'
  if (randomQuote) {
    quote = (
      <div className='quote-containter'>
        <blockquote id='spn-quote'>{randomQuote.quote}</blockquote>
        <span id='spn-quote'>{randomQuote.author}</span>
      </div>
    )
  }


  return (
    <section className='quote-section'>
      {quote}
      <div className='btn-container'>
        <button className='btn-prev-quote' disabled={disabled} onClick={prevQuote}>Previous quote</button>
        <button className='btn-next-quote' onClick={nextQuote}>Next quote!</button>
      </div>
    </section>
  )
}


export default QuoteContainer;