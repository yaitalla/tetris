import { socket } from './events';
import { START_QUICK, ROOM_CREATED, ALERT, ROOMS_UPDATE,
    USERS_UPDATE, USER_ID, ACTUAL_ROOM, PAUSE, 
    START, LEAVE_ENDURO, ENTER_ROOM, CREATE_ROOM, MULTI, MORE_SHAPES, WAITING, WINNER, QUICK_PLAY } from '../config/constants';



export const quickPlay = () => {
  socket.emit(QUICK_PLAY)
}
export const multiPlayer = ( stage, room) => {
  socket.emit(MULTI, {stage, room});
}
export const winner = (room, score, change) => {
  socket.emit(WINNER, {room, score, change})
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
export const startQuick = (room) => {
  console.log(room)
  socket.emit(START_QUICK, room)
}
export const waittingOwner = (room) => {
  socket.emit(WAITING, room)
}
export const leaveEnduro = (room) => {
  socket.emit(LEAVE_ENDURO, room)
}