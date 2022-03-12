import {
	SENDER_INFO_SUCCESS,
  SENDER_INFO_FAIL,
	SET_SENDER_LOADING
} from "../actions/types";

const INITAL_AUTH_STATE = {
  sender:null,
	loading: false,
};

export default function senderReducer(
	state = INITAL_AUTH_STATE,
	action
){
	switch (action.type) {
		case SENDER_INFO_SUCCESS:
			return {
				...state,
				loading:false,
				sender: action.payload,
			};
		case SENDER_INFO_FAIL:
			return {
				...state,
        loading:false,
			};
		case SET_SENDER_LOADING:
			return {
				...state,
				loading:true
			}
		
		default:
			return state;
	}
}

