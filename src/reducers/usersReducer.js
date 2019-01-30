
import { SHOW_USER } from '../actions/users-actions';
import { GET_USER_ERROR } from '../actions/users-actions';


export default function usersReducer(state=[], action){

	switch(action.type){
		case SHOW_USER:
		   return action.payload.users;
		case GET_USER_ERROR:
			return action.payload.error;
		default:
			return state;		
	}

	return state;
}