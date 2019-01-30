import axios from 'axios';

export const GET_USER_ERROR = 'GET_USER_ERROR';
export const SHOW_USER = 'SHOW_USER';


export function showUsers(data){

	return {
		type: SHOW_USER,
		payload: {

			users: data,
		}
	}
}

export function showError(){
	return  {
		type: GET_USER_ERROR,
		payload: {
			error: 'ERROR',
		}
	}
}

export function getUsers(){
	return async dispatch => {
		try{
			const res = await axios.get('https://jsonplaceholder.typicode.com/users')
			dispatch(showUsers(res.data));
		}
		catch(e){
			dispatch(showError());
		}
	}
}