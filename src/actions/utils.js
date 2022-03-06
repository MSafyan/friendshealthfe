import { toast } from "react-toastify";

export const errMsg=(error)=>{
	console.log(error.response)
	debugger;
	if(!error.response){
	return toast.warn("server error");
}
else if(error.response.data==="Not found" || error.response.data.error !=="Bad Request"){
	return toast.warn("server error");
}else{
	const msg=error.response?.data?.message[0]?.messages[0]?.message;
	return toast.warn(msg);
}
}
