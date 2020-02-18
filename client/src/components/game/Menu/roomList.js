import React, { useContext, useCallback }  from 'react';
import SocketContext from '../../../sockets/context';

const RoomLine = (obj) => {
    return (
        <div>
            <p>{obj.name}</p>
            <p>{obj.owner}</p>
        </div>
    )
}
const RoomList = () => {
    const { rooms } = useContext(SocketContext);
    // if (rooms)console.log(rooms)
    return (
        <>
            {
                rooms ?
                rooms.map((room, i) => {
                    RoomLine(room)
                })
                : null
            }
        </>
    )
}

export default RoomList;