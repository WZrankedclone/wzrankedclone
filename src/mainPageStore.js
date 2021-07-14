// ACTION TYPES
const SET_SEARCH = "SET_SEARCH";

// ACTION CREATORS - function that changes state
export const setSearch = (sVal) => ({
  type: SET_SEARCH,
  sVal,
});

// THUNK CREATORS

// INITIAL STATE
const initialState = {
  searchValue: "",
};

// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchValue: action.sVal,
      };
    default:
      return state;
  }
}
