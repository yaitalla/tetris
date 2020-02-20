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

export const check = (setValue, dispatch) => {
    socket.on(USER_ID, (id) => {
        //   console.log("userID  update", id)
         dispatch({type: USER_ID, userID: id})
    });
    socket.on(USERS_UPDATE, (users) => {
        //   console.log("users update", users)
          dispatch({type: USERS_UPDATE, userlist: users})
        // setValue((state) => {
        //     return {...state, users}
        // })
    });
    socket.on(ROOM_CREATED, (rooms) => {
        //  console.log("rooms update", rooms)
         dispatch({type: ROOM_UPDATE, roomlist: rooms})
    });
    socket.on(ACTUAL_ROOM, (actualRoom) => {
         console.log("entering room", actualRoom)
         dispatch({type: ACTUAL_ROOM, room: actualRoom})
    });
    socket.on(ROOM_UPDATE, (rooms) => {
        console.log("update rooms", rooms)
        dispatch({type: ROOM_UPDATE, roomlist: rooms})
   });
}
export const initSockets = ( {setValue, dispatch} ) => {
    check( setValue, dispatch );
};