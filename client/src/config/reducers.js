import { ALERT, USERS_UPDATE, ROOM_CREATED,
    ROOM_UPDATE, USER_ID, LEFT, RIGHT, ACTUAL_ROOM,
    PAUSE, START, DOWN, ADD_TETRI, REFRESH, LEAVE,
    GAME_OVER, ROTATE } from './constants';

const initial_state = {
    message: 'no message yet',
    users: [],
    yourID: "",
    rooms: [],
    actualRoom: -1,
    playing: false,
    field: [],
    shapeIndex: -1,
    gameOver: false,
    falling: false,
    score: 0 
}

const rootReducer = (state = initial_state, action) => {
    switch(action.type){
        case GAME_OVER:
            return {
                ...state,
                playing: false,
                gameOver: true
            }
        case RIGHT:
            return {
                ...state,
                field: action.field,
                rooms: action.rooms
            }
        case ROTATE:
            return {
                ...state,
                field: action.field
            }
        case LEFT:
            return {
                ...state,
                field: action.field,
                rooms: action.rooms
            }
        case LEAVE:
            return {
                ...state,
                actualRoom: -1
            }
        case ADD_TETRI:
            return {
                ...state,
                shapeIndex: action.shapeIndex,
                field: action.field,
                score: action.score == 0 ? 0 : state.score + action.score
            }
        case REFRESH:
            return {
                ...state
            }
        case DOWN:
            return {
                ...state,
                field: action.field,
                rooms: action.rooms
            }
        case START:
            return {
                ...state,
                field: action.field,
                shapeIndex: action.index,
                playing: true
            }
        case ROOM_UPDATE:
            return {
                ...state,
                rooms: action.rooms
            }
        case PAUSE:
            return {
                ...state,
                playing: action.playing,
        }
        case ACTUAL_ROOM:
            return {
                ...state,
                actualRoom: action.room,
                field: action.field,
                shapeIndex: -1
            }
        case ROOM_CREATED:
            return {
                ...state,
                rooms: action.roomlist
            }
        case USER_ID:
            return {
                ...state,
                yourID: action.yourID
            }
        case USERS_UPDATE:
            return {
                ...state,
                users: action.users,
                rooms: action.rooms
            }
        case ALERT:
            return {
                ...state,
                message: action.message
            }
        default: 
            return state
    }
}

export default rootReducer;
