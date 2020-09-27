import React, { Component } from 'react';
import { QuoteContainer } from './components/quote-container/quote-container.component.jsx';
import { Loader } from './components/loader/loader.component.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      finished: false,
      author: '',
      quote: ''
    };
  }

  getQuote = () => {
    this.setState({finished: false});
    const proxyUrl = 'https://young-journey-86731.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

    fetch(proxyUrl + apiUrl)
      .then(response => response.text())
      .then(rawText => rawText.replace("\\", ""))
      .then(removed => JSON.parse(removed))
      .then(quoteObj => {
        this.setState({ author: quoteObj.quoteAuthor, quote: quoteObj.quoteText, finished: true})
        // console.log(this.state)
      })
      .catch(err => {
        this.setState({ author: 'Unknown', quote: 'Please refresh.', finished: true})
        // console.log(this.state)
      })
  }

  componentDidMount() {
    this.getQuote()
  }

  render() {
    return(
      <div className="App">
      {
        this.state.finished ? (
          <QuoteContainer quoteObj={this.state} getQuote={this.getQuote} />
        ) : (
          <Loader />
        )
      }
      </div>
    )
  }
}

export default App;


