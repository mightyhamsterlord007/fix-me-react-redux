import { GET_ERRORS } from '../constants';

const initialState = {}

export default (state=initialState, action) => {
    let updated = Object.assign({}, state);
    switch (action.type) {

        case GET_ERRORS:
            // console.log('-----')
            // console.log(action.data.response)
            return action.data.response.data;

        default: 
            return state;
    }
   
}