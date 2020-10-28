import React, {useContext} from 'react';
import { Context } from '../../reducer';
import { Wrap, Line, StyledA } from './style';
import { updateRooms } from '../../sockets/events';
import Link from 'next/link';

const NavLine = ({name, owner}) => {
    return (
        <Link href="/" passHref  >
            <StyledA>
                <Line>{"name: "+name}</Line>
                <Line>{"owner: "+owner}</Line>
            </StyledA>
        </Link>
    )
}

const RoomList = () => {
    const {store} = useContext(Context)
    let input;
    const createRoom = (name) => {
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
                store.rooms.map((room, i) => <NavLine key={i} name={room.roomName} owner={room.ownerIndex} />)
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