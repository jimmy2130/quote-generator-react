import React from 'react';
import './button-container.styles.css';

export const ButtonContainer = ({ quoteObj, getQuote }) => {

  const tweetQuote = (quoteObj) => {
    const { author, quote } = quoteObj;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
  }

  return(
    <div className="button-container">
      <button onClick={() => tweetQuote(quoteObj)} className="twitter-button" title="Tweet This!">
        <i className="fab fa-twitter"></i>
      </button>
      <button onClick={getQuote}>New Quote</button>
    </div>
  )
};



