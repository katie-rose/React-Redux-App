import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchQuote } from "../store/actions";

const Quotes = props => {
  const getQuotes = e => {
    e.preventDefault();
    props.fetchQuote();
  };

  if (props.isFetching) {
    return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  }

  return (
    <>
      <button onClick={getQuotes}>Yeezus</button>
      {props.quote === 'One of my favorite of many things about what the Trump hat represents to me is that people can’t tell me what to do because I’m black' ? props.quote = 'I leave my emojis bart Simpson color' : props.quote ? (
        <h4>{props.quote}</h4>
      ) : (
        <p>Fetch a quote dawg</p>
      )}
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    quote: state.quote
  };
};
export default connect(
  mapStateToProps,
  { fetchQuote }
)(Quotes);
