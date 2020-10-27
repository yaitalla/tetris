import { createContext } from 'react';
import { UPDATE_DATA,
    USERS_UPDATE, YOUR_ID, UPDATE_ROOMS
} from './constants';

const Context = createContext();

const initialState = {
    users: [],
    rooms: [],
    my_id: "",
    status: {}
}

const reducer = ( state, action ) => {
    // console.log(action)
    switch(action.type) {
        case USERS_UPDATE:
            return {
                ...state,
                users: action.users
            }
        case YOUR_ID:
            return {
                ...state,
                my_id: action.yourId
            }
        case UPDATE_ROOMS:
            return {
                ...state,
                rooms: action.roomList
            }
        default:
            return {
                ...state
            }
    }
}

export {
    initialState,
    reducer,
    Context
}