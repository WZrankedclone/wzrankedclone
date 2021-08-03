import axios from "axios";

// ACTION TYPES
const SET_SEARCH = "SET_SEARCH";
const SET_DATA = "SET_DATA";

// ACTION CREATORS - function that changes state
// export const setSearch = (sVal) => ({
//   type: SET_SEARCH,
//   sVal,
// });

export const setSearch = (sVal) => {
  function space(value) {
    let result = "";
    for (let i = 0; i < value.length; i++) {
      if (value[i] === " ") {
        result += "%20";
      } else {
        result += value[i];
      }
    }
    console.log(result);
    return result;
  }
  return {
    type: SET_SEARCH,
    sVal: space(sVal),
  };
};

export const setData = (wVal) => {
  return {
    type: SET_DATA,
    wVal,
  };
};

// THUNK CREATORS
export const fetchData = (dVal) => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
        params: { q: `${dVal}` },
        headers: {
          "x-rapidapi-key":
            "264df7a5b5mshcc5521dd5824c80p12f388jsn3db4bd2719d6",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };

      const res = await axios.request(options);
      dispatch(await setData(res.data));
    } catch (error) {}
  };
};

// INITIAL STATE
const initialState = {
  searchValue: "",
  current: {},
  location: {},
  forecast: []
  
};

// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchValue: action.sVal,
      };
    case SET_DATA:
      return {
        ...state,
        current: action.wVal.current,
        location: action.wVal.location,
        forecast: action.wVal.forecast.forecastday,
      };
    default:
      return state;
  }
}
