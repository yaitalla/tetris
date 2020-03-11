import { socket } from './events';
import { SERVER_MESSAGE, ROOM_CREATED, ALERT, ROOMS_UPDATE,
    USERS_UPDATE, USER_ID, ACTUAL_ROOM, PAUSE, 
    START, LEAVE, ENTER_ROOM, CREATE_ROOM, MULTI, MORE_SHAPES } from '../config/constants';


export const multiPlayer = (dropTime, player, rows, score, level, stage, room) => {
  socket.emit(MULTI, {dropTime, player, rows, score, level, stage, room});
}
export const tenMoreShapes = (room) => {
  // console.log('ici room')
  socket.emit(MORE_SHAPES, room)
}
export const createRoom = (name) => {
  socket.emit(CREATE_ROOM, name);
};
export const roomUpdate = () => {
  socket.emit(ROOMS_UPDATE);
};
export const enterRoom = (room, i) => {
    socket.emit(ACTUAL_ROOM, i)
    // dispatch({type: ACTUAL_ROOM, room: name})
}
