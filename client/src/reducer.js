import { createContext } from 'react';
import { SERVER_MESSAGE, ROOM_CREATED, 
    GAME_STATUS, ROOMS_UPDATE, MENU, USER_LIST,
    USERS_UPDATE, USER_ID, ACTUAL_ROOM, 
    PAUSE, START, LEAVE, NEW, PLAYER_STATUS, ENEMI } from './config/constants';
import { createStage } from './config/gameHelpers';
export const initialState = {
    users: [],
    rooms: [],
    gameStatus: NEW,
    status: {},
    actualRoom: "",
    enemi: { stage: createStage()}
}

export const Context = createContext();

export const reducer =  (state, action) => {
    console.log(action)
    switch(action.type){
        case ENEMI:
            return {
                ...state,
                enemi: action.enemi
            }
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
        case PLAYER_STATUS:
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