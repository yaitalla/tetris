import React, {useContext} from 'react';
import { Context } from '../../reducer';
import { Wrap, Line } from './style';
import { updateRooms } from '../../sockets/events';

const RoomList = () => {
    const {store} = useContext(Context)
    let input;
    const createRoom = (name) => {
        console.log("room creayed by: Player" + store.users.indexOf(store.my_id)+1)
        console.log("room name: ", name)
        updateRooms({roomName: name, ownerIndex: store.users.indexOf(store.my_id)})
    }
    const submitForm = (e) => {
        e.preventDefault();
        if (!input.value.trim()) { return }
        createRoom(input.value)
        input.value = ''
    }
    return (
        <Wrap>
            {
                store.rooms ?
                store.rooms.map((room, i) => <Line key={i} >{room.roomName}</Line>)
                : null
            }
            <form onSubmit={submitForm}>
                <input
                    placeholder="enter a room name"
                    ref={node => (input = node)}
                />
                <button type="submit" >create room</button>
            </form>

        </Wrap>
    )
}

export default RoomList;