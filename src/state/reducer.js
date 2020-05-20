import { CREATE_CHARACTER } from "./actions";
import { getName } from '../gen';

const initialState = {
    name: 'Fredathan',
    occupation: '',
    equipment: [],
    gender: '',
    //stats, traits
}

const root = (state=initialState, action) => {
    switch(action.type) {
        case CREATE_CHARACTER:
            return {
                ...state,
                name: getName()
            }
        default:
            return state;
    }
};

export default root;