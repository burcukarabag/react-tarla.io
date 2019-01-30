import axios from 'axios';

export const SHOW_POST = 'SHOW_POST';
export const GET_POST_ERROR = 'GET_POST_ERROR';

export function showPosts(data){
	return {
		type: SHOW_POST,
		payload: {
			posts: data
		}
	}
}

export function showError(){
	return  {
		type: GET_POST_ERROR,
		payload: {
			error: 'ERROR',
		}
	}
}

export function getPosts(){
	return async dispatch => {
		try{
			const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
			dispatch(showPosts(res.data));
		}
		catch(e){
			dispatch(showError());
		}
	}
}