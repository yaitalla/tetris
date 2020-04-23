import { createContext } from 'react';
import { SERVER_MESSAGE, ROOM_CREATED, 
    GAME_STATUS, ROOMS_UPDATE, MENU, USER_LIST,
    USERS_UPDATE, USER_ID, ACTUAL_ROOM, 
    WINNER, START, LEAVE, NEW, PLAYER_STATUS, ENEMI, START_PAGE, QUICK_PLAY } from './config/constants';
import { createStage } from './config/gameHelpers';
export const initialState = {
    users: [],
    rooms: [],
    gameStatus: START_PAGE,
    status: {},
    actualRoom: "",
    enemi: createStage(),
    winner: false,
    enemiScore: 0,
    quickplay: ""
}

export const Context = createContext();

export const reducer =  (state, action) => {
    console.log(action)
    switch(action.type){
        case QUICK_PLAY:
            return {
                ...state,
                gameStatus: QUICK_PLAY,
                quickplay: action.roomData
            }
        case WINNER:
            return {
                ...state,
                enemiScore: action.score,
                actualRoom: action.room,
                winner: true
            }
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