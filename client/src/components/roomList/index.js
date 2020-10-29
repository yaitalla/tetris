import React, {useContext} from 'react';
import { Context } from '../../reducer';
import { Wrap, Line, StyledA, NavLink } from './style';
import { updateRooms } from '../../sockets/events';
import Link from 'next/link';
import { STATUS, INROOM } from '../../constants';

const NavLine = ({name, owner, cb}) => {
    return (
        <NavLink onClick={() => cb({ type: STATUS, update: INROOM })} >
            <StyledA>
                <Line>{"name: "+name}</Line>
                <Line>{"owner: "+owner}</Line>
            </StyledA>
        </NavLink>
    )
}

const RoomList = () => {
    const {store, dispatch} = useContext(Context)
    let input;
    const createRoom = (name) => {
        updateRooms(
            {
                name: name,
                ownerIndex: store.users.indexOf(store.my_id),
                users: [],
                status: ""
            }
        )
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
                store.rooms.map((room, i) =>
                    <NavLine key={i}
                        name={room.name}
                        owner={room.ownerIndex}
                        cb={dispatch}
                    />)
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