import { createContext } from 'react';
import { SERVER_MESSAGE, ROOM_CREATED, 
    GAME_STATUS, ROOM_UPDATE, MENU, USER_LIST,
    USERS_UPDATE, USER_ID, ACTUAL_ROOM, 
    PAUSE, START, LEAVE, FALL } from './config/constants';

export const initialState = {
    users: [],
    rooms: [],
    gameStatus: USER_LIST,
    userID: [],
    actualRoom: ""
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
                users: action.users
            }
        case USER_ID:
            return {
                ...state,
                userID: action.userID,
            }
        case GAME_STATUS:
                return {
                    ...state,
                    gameStatus: action.gameStatus,
                }
        case ROOM_UPDATE:
            return {
                ...state,
                rooms: action.rooms,
            }
        default:
            return state;
    }
}