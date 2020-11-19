import { createContext } from 'react';
import { UPDATE_DATA, UPDATE_ROOMS, LOBBY, STATUS,
    USERS_UPDATE, YOUR_ID, INROOM, DISCONNECT
} from './constants';

const Context = createContext();

const initialState = {
    users: [],
    rooms: [],
    my_id: "",
    status: DISCONNECT
}

const reducer = ( state, action ) => {
    console.log(action)
    switch(action.type) {
        case USERS_UPDATE:
            return {
                ...state,
                users: action.users
            }
        case YOUR_ID:
            return {
                ...state,
                my_id: action.yourId,
                rooms: action.rooms,
                status: LOBBY
            }
        case UPDATE_ROOMS:
            return {
                ...state,
                rooms: action.roomList
            }
        case STATUS: {
            return {
                ...state,
                status: action.update
            }
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