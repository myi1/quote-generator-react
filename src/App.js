import axios from "axios";
import React, { Component } from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default class App extends Component {
  state = {
    quotesList: [],
    quote: "",
    author: "",
    shouldUpdate: true,
  };

  componentDidMount() {
    this.getQuotes();
  }

  componentDidUpdate() {
    const { shouldUpdate } = this.state;
    if (shouldUpdate) {
      this.getNewQuote();
    }
  }

  getQuotes() {
    const apiURL = "https://type.fit/api/quotes";
    axios
      .get(apiURL)
      .then((response) => {
        this.setState({
          ...this.state,
          quotesList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    this.getNewQuote();
  }

  getNewQuote = () => {
    const quote =
      this.state.quotesList[
        Math.floor(Math.random() * this.state.quotesList.length)
      ];
    if (quote && !quote.author) {
      console.log(quote);
      this.setState({
        ...this.state,
        author: "Unknown",
        quote: quote.text,
        shouldUpdate: false,
      });
    } else if (quote) {
      console.log(quote);
      this.setState({
        ...this.state,
        author: quote.author,
        quote: quote.text,
        shouldUpdate: false,
      });
    }
  };

  tweetQuote = () => {
    const { quote, author } = this.state;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, "_blank");
  };

  render() {
    const { quote, author } = this.state;
    if (!quote) {
      return <div className='loader' id='loader'></div>;
    }
    return (
      <div className='quote-container' id='quote-container'>
        <div className='quote-text'>
          <i className='fas fa-quote-left'></i>
          <span id='quote' className={quote.length > 120 ? "long-quote" : null}>
            {quote}
          </span>

          <div className='quote-author'>
            <span id='author'>{author}</span>
          </div>
          <div className='button-container'>
            <button className='button twitter' onClick={this.tweetQuote}>
              <FontAwesomeIcon
                icon={faTwitter}
                id='twitter'
                title='Tweet This!'
              />
            </button>

            <button
              id='new-quote'
              className='button'
              onClick={this.getNewQuote}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}
