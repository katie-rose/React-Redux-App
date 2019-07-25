import { FETCH_QUOTE_START, FETCH_QUOTE_SUCCESS } from "../actions";

export const initialState = {
  error: "",
  isFetching: false,
  quote: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_START:
      return {
        ...state,
        error: "",
        isFetching: true,
        quote: ""
      };
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        quote: action.payload
      };
    default:
      return state;
  }
};
