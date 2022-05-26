import { GET_HOTELS } from "../action/action";

const initialState = {
    hotels: [],
  };

  const reducers = (state = initialState, action) => {
    switch (action.type) {
    case GET_HOTELS: 
        return {
            ...state,
            hotels: action.payload,
        }
      default:
        return state;
    }
  };
  
  export default reducers;