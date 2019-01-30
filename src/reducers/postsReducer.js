
import { SHOW_POST } from '../actions/posts-actions';
import { GET_POST_ERROR } from '../actions/posts-actions';


export default function postsReducer(state=[], action){

	switch(action.type){
		case SHOW_POST:
		   return action.payload.posts;
		 

		case GET_POST_ERROR:
			return action.payload.error;

		default:
			return state;

	}

	return state;

}