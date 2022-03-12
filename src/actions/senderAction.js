import axios, { url } from './customAxios';
import {errMsg} from './utils';

import {
  SENDER_INFO_SUCCESS,
  SENDER_INFO_FAIL,
  SET_SENDER_LOADING
} from './types';
import { toast } from "react-toastify";

export const SENDER_INFO = (form_data) => async (dispatch) => {
		dispatch({ type: SENDER_INFO_SUCCESS, payload: form_data.form });
    // form_data.history.push('/friendInfo')
};

export const SENDER_INFO_BE = (form_data) => async (dispatch) => {
	try {
		dispatch({type:SET_SENDER_LOADING})

		const res = await axios.post(`${url}/senderinfos`, form_data);
		dispatch({ type: SENDER_INFO_SUCCESS, payload: res.data.user });
		toast.success("Sender successfully created...");

	} catch (error) {

		dispatch({ type: SENDER_INFO_FAIL});
		errMsg(error);
	}
};