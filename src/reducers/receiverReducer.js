import {
  RECEIVER_INFO_SUCCESS,
  RECEIVER_INFO_FAIL,
  SET_RECEIVER_LOADING
} from "../actions/types";

const INITAL_AUTH_STATE = {
  receiver:null,
	loading: false,
};

export default function receiverReducer(
	state = INITAL_AUTH_STATE,
	action
){
	switch (action.type) {
		case RECEIVER_INFO_SUCCESS:
			return {
				...state,
				loading:false,
				receiver: action.payload,
			};
		case RECEIVER_INFO_FAIL:
			return {
				...state,
        loading:false,
			};
    case SET_RECEIVER_LOADING:
      return {
        ...state,
        loading:true
      }
		default:
			return state;
	}
}

