import { CREATE_CHARACTER } from "./actions";
import { getName, getGender, getOccupation, getStats, getTraits } from '../gen';

const initialState = {
    name: 'Fredathan',
    occupation: '',
    equipment: [],
    gender: '',
    stats: [],
    traits: ''
}

const root = (state=initialState, action) => {
    switch(action.type) {
        case CREATE_CHARACTER:
            const gender = getGender();
            const occupationInfo = getOccupation();

            return {
                ...state,
                gender: gender,
                stats: getStats(),
                occupation: occupationInfo.name,
                equipment: occupationInfo.items,
                name: getName(gender),
                traits: getTraits()
            }
        default:
            return state;
    }
};

export default root;