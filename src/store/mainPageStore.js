// ACTION TYPES
const SET_SEARCH = "SET_SEARCH";
const SET_TOGGLE = "SET_TOGGLE";
const GET_STATS = "GET_STATS";

// ACTION CREATORS - function that changes state
// export const setSearch = (sVal) => ({
//   type: SET_SEARCH,
//   sVal,
// });

export const setSearch = (sVal) => {
  console.log("ACTION SEARCH OCCURED");
  return {  
    type: SET_SEARCH,
    sVal,}
}

export const setToggle = (pVal) => ({
  type: SET_TOGGLE,
  pVal,
});

// export const getStats = (statsZ) => ({
//   type: GET_STATS,
//   statsZ,
// });

export const getStats = (statsZ) => {
  console.log("getStats ACTION OCCURED", statsZ)
  return {
    type: GET_STATS,
    statsZ,
  }
}


// THUNK CREATORS

// INITIAL STATE
const initialState = {
  searchValue: "",
  toggleValue: "",
  THEstats: {}
};

// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH:
      console.log("SET_SEARCH REDUCER OCCURED") 
      return {
        ...state,
        searchValue: action.sVal,
      };
    case SET_TOGGLE:
      return {
        ...state,
        toggleValue: action.pVal,
      };
      case GET_STATS:
        console.log("GET_STATS REDUCER OCCURED") 
        return {
          ...state,
          THEstats: action.statsZ,
        };
    default:
      return state;
  }
}
