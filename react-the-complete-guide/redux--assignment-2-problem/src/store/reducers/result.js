import * as actionTypes from '../actions';

const initialState = {
	results: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD:
			return {
				...state,
				results: state.results.concat(action.result)
			}
		default: 
			return state;
	}
}

export default reducer;