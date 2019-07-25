import axios from "axios";

export const FETCH_QUOTE_START = "FETCH_QUOTE_START";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAILURE = "FETCH_QUOTE_FAILURE";

export const fetchQuote = (
  firstName = "Kanye",
  lastName = "West"
) => dispatch => {
  dispatch({ type: FETCH_QUOTE_START });
  // fetch quote
  axios
    .get(`https://api.kanye.rest`)
    .then(res => {
      dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data.value.quote });
    })
    .catch(err => console.log(err.response));
};
