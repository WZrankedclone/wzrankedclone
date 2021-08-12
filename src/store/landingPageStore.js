import axios from "axios";

// ACTION TYPES
const SET_SEARCH = "SET_SEARCH";
const SET_DATA = "SET_DATA";
const SET_VIEW = "SET_VIEW";
const SET_TEMP_TYPE = "SET_TEMP_TYPE "

// ACTION CREATORS - function that changes state
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

export const setView = (view) => ({
  type: SET_VIEW,
  view,
});

export const setTempType = () => ({
  type: SET_TEMP_TYPE,
})

// THUNK CREATORS
export const fetchData = (dVal) => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
        params: { q: `${dVal}`, days: "3" },
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
  forecast: [],
  view: "Daily",
  tempType: "f",
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
    case SET_VIEW:
      return {
        ...state,
        view: action.view,
      };
    case SET_TEMP_TYPE:
      if(state.tempType=== "f"){
        return {
          ...state,
          tempType:"c"
        }
      } else {
        return{
          ...state,
          tempType:"f"
        }
      }
    default:
      return state;
  }
}
