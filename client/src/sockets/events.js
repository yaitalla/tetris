import io from "socket.io-client";
import { USERS_UPDATE, YOUR_ID,
    UPDATE_ROOMS, UPDATE_DATA
} from '../constants';
const SOCKET_API_URL = "http://localhost:4000";
const socket = io(SOCKET_API_URL);


const SocketEvents = ( setValue, dispatch ) => {
    socket.on(USERS_UPDATE, (userlist) => {
        dispatch({type: USERS_UPDATE, users: userlist})
    })

    socket.on(UPDATE_ROOMS, (rooms) => {
        dispatch({ type: UPDATE_ROOMS, roomList: rooms})
    })

    socket.on(UPDATE_DATA, (data) => {
        dispatch({type: UPDATE_DATA, rooms: data.rooms, users: data.users})
    })

    socket.on(YOUR_ID, id => {
        dispatch({type: YOUR_ID, yourId: id})
    })
}

export const initSockets = ( { setValue, dispatch }) => {
    SocketEvents( setValue, dispatch );
}

export const updateRooms = (room) => {
    socket.emit(UPDATE_ROOMS, room)
} 