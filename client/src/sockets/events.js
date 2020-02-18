import io from "socket.io-client";

import { SERVER_MESSAGE, ROOM_CREATED, ALERT, ROOM_UPDATE,
    USERS_UPDATE, USER_ID, ACTUAL_ROOM, PAUSE, 
    START, LEAVE, FALL } from '../config/constants';

const SOCKET_API_URL = "http://localhost:4000";
export const socket = io(SOCKET_API_URL);

// export const parseDriverLocationToTableData = (driversLocations) =>
//   Object.entries(driversLocations).map(
//     ([key, { id, position: { lat, lon } } = { position: {} }]) => [id, lat, lon]
//   );

//  const socketEvents = ( setValue) => {
     
//     socket.on('locationUpdated', (value) => {
//         const loc = parseDriverLocationToTableData(value)
//         setValue((state) => {
//             return {...state, loc}
//         })
//   });
// };

// export const initSockets = ( {setValue} ) => {
//     socketEvents( setValue );
// };

export const check = (setValue) => {
    socket.on(USERS_UPDATE, (users) => {
        //   console.log("user  update")
        setValue((state) => {
            return {...state, users}
        })
    });
    socket.on(ROOM_CREATED, (rooms) => {
        //  console.log("rooms update")
        setValue((state) => {
            return {...state, rooms}
        })
    });
    socket.on(ACTUAL_ROOM, (room) => {
        // console.log("entering room", room)
       setValue((state) => {
           return {...state, room}
       })
   });
}
export const initSockets = ( {setValue} ) => {
    check( setValue );
};