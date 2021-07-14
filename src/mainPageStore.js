// ACTION TYPES
const SET_SEARCH = "SET_SEARCH";
const SET_TOGGLE = "SET_TOGGLE";

// ACTION CREATORS - function that changes state
export const setSearch = (sVal) => ({
  type: SET_SEARCH,
  sVal,
});

export const setToggle = (pVal) => ({
  type: SET_TOGGLE,
  pVal,
});

// THUNK CREATORS

// INITIAL STATE
const initialState = {
  searchValue: "",
  toggleValue: "",
};

// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchValue: action.sVal,
      };
    case SET_TOGGLE:
      return {
        ...state,
        toggleValue: action.pVal,
      };
    default:
      return state;
  }
}
