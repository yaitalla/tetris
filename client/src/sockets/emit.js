import { socket } from './events';
import { SERVER_MESSAGE, ROOM_CREATED, ALERT, ROOMS_UPDATE,
    USERS_UPDATE, USER_ID, ACTUAL_ROOM, PAUSE, 
    START, LEAVE, ENTER_ROOM, CREATE_ROOM, MULTI, MORE_SHAPES, WAITING } from '../config/constants';


export const multiPlayer = ( stage, room) => {
  socket.emit(MULTI, {stage, room});
}
export const tenMoreShapes = (room) => {
  socket.emit(MORE_SHAPES, room)
}
export const createRoom = (name) => {
  socket.emit(CREATE_ROOM, name);
};
export const enterRoom = (room, i) => {
    socket.emit(ACTUAL_ROOM, i)
}
export const start = (room) => {
    socket.emit(START, room)
}
export const waittingOwner = (room) => {
  socket.emit(WAITING, room)
}
export const pause = () => {
  
}