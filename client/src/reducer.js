import { createContext } from 'react';
import { SERVER_MESSAGE, ROOM_CREATED, 
    GAME_STATUS, ROOMS_UPDATE, MENU, USER_LIST,
    USERS_UPDATE, USER_ID, ACTUAL_ROOM, 
    PAUSE, START, LEAVE, FALL, USER_STATUS } from './config/constants';

export const initialState = {
    users: [],
    rooms: [],
    gameStatus: USER_LIST,
    status: {},
    actualRoom: "",
    enemi: {}
}

export const Context = createContext();

export const reducer =  (state, action) => {
    switch(action.type){
        case ACTUAL_ROOM:
            return {
                ...state,
                actualRoom: action.room
            }
        case USERS_UPDATE:
            return {
                ...state,
                users: action.userlist
            }
        case USER_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case GAME_STATUS:
                return {
                    ...state,
                    gameStatus: action.gameStatus,
                }
        case ROOMS_UPDATE:
            return {
                ...state,
                rooms: action.roomlist,
            }
        default:
            return state;
    }
}