import { socket } from './events';
import { SERVER_MESSAGE, ROOM_CREATED, ALERT, ROOM_UPDATE,
    USERS_UPDATE, USER_ID, ACTUAL_ROOM, PAUSE, 
    START, LEAVE, ENTER_ROOM, CREATE_ROOM } from '../config/constants';

export const createRoom = (name) => {
  socket.emit(CREATE_ROOM, name);
};
export const roomUpdate = () => {
  socket.emit(ROOM_UPDATE);
};
export const enterRoom = (i) => {
    socket.emit(ENTER_ROOM, i)
    // dispatch({type: ACTUAL_ROOM, room: name})
}
