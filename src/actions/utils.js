import { toast } from "react-toastify";

export const errMsg=(error)=>{
	let msg='';
	debugger;
	console.log(error.response)
	if(!error.response){
		msg='Server Error'
	}
	else if(error.response.data.error==="Bad Request"){
		msg=error.response?.data?.message[0]?.messages[0]?.message;
	}
	else if(error.response.data.error==="Forbidden"){
		msg="please login first..."
	}
	else if(error.response.data==="Not found" || error.response.data.error){
		msg = 'Server Error'
	}
	toast.warn(msg);
}
