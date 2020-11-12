import { createContext } from 'react';
import { LOBBY, ROOM_UPDATE, USERS
} from './constants';

const RoomContext = createContext();

const initialState = {
    name: "",
    ownerIndex: -1,
    users: [],
    status: LOBBY
}

const reducer = ( state, action ) => {
    console.log(action)
    switch(action.type) {
        case STATUS:
            return {
                ...state,
                users: action.users
            }
        case USERS:
            return {
                ...state,
                my_id: action.yourId
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
    RoomContext
}