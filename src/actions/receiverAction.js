import axios, { url } from './customAxios';
import {errMsg} from './utils';

import {
  RECEIVER_INFO_SUCCESS,
  RECEIVER_INFO_FAIL,
	SENDER_INFO_SUCCESS,
	SENDER_INFO_FAIL,
  SET_RECEIVER_LOADING
} from './types';
import { toast } from "react-toastify";

export const RECEIVER_INFO = (form_data) => async (dispatch) => {
	dispatch({ type: RECEIVER_INFO_SUCCESS, payload: form_data.form });
};

export const RECEIVER_INFO_BE = (form_data) => async (dispatch) => {
	try {
		dispatch({type:SET_RECEIVER_LOADING})
		debugger;

		const res = await axios.post(`${url}/receiverinfos`, form_data.receiver);
		const res2 = await axios.post(`${url}/senderinfos`, {...form_data.sender,receiverinfo:res.data.id});
		
		dispatch({ type: SENDER_INFO_SUCCESS, payload: res2.data });
		dispatch({ type: RECEIVER_INFO_SUCCESS, payload: res.data });

		toast.success("Sender successfully created...");
		toast.success("receiver successfully created...");

		form_data.history.push('/success')

	} catch (error) {

		dispatch({ type: RECEIVER_INFO_FAIL});
		errMsg(error);
	}
};