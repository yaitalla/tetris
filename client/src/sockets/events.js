import io from "socket.io-client";

import { SERVER_MESSAGE, ROOM_CREATED, ENEMI, ROOMS_UPDATE,
    USERS_UPDATE, PLAYER_STATUS, ACTUAL_ROOM, PAUSE, 
    START, LEAVE, FALL, MORE_SHAPES } from '../config/constants';

const SOCKET_API_URL = "http://localhost:4000";
export const socket = io(SOCKET_API_URL);


export const check = (setValue, dispatch) => {
    socket.on(MORE_SHAPES, actualRoom => {
        dispatch({type: ACTUAL_ROOM, room: actualRoom})
    })
    socket.on(ENEMI, data => {
        console.log('enemi stat', data)
        dispatch({type: ENEMI, enemi: data})
    })
    socket.on(PLAYER_STATUS, (status) => {
         dispatch({type: PLAYER_STATUS, status: status})
    });
    socket.on(USERS_UPDATE, (users) => {
          dispatch({type: USERS_UPDATE, userlist: users})
        // setValue((state) => {
        //     return {...state, users}
        // })
    });
    socket.on(ROOM_CREATED, (rooms) => {
         dispatch({type: ROOM_UPDATE, roomlist: rooms})
    });
    socket.on(ACTUAL_ROOM, (actualRoom) => {
         dispatch({type: ACTUAL_ROOM, room: actualRoom})
    });
    socket.on(ROOMS_UPDATE, (rooms) => {
        // console.log(rooms)
        dispatch({type: ROOMS_UPDATE, roomlist: rooms})
   });
}
export const initSockets = ( {setValue, dispatch} ) => {
    check( setValue, dispatch );
};