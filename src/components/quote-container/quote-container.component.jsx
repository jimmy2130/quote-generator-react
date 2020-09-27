import React from 'react';
import './quote-container.styles.css';
import { ButtonContainer } from '../button-container/button-container.component.jsx';

export const QuoteContainer = (props) => {
  const { quoteObj } = props;
  const { quote, author } = quoteObj;
  // console.log(quote)
  return(
    <div className="quote-container">
      {/* quote */}
      <div className="quote-text">
        <i className="fas fa-quote-left"></i>
        <span className={quote.length > 120 ? 'long-quote' : ''}>{quote}</span>
      </div>
      {/* author */}
      <div className="quote-author">
        <span>{author ? author : 'Unknown'}</span>
      </div>
      <ButtonContainer {...props}/>
    </div>
  )
};