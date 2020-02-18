import React, { useContext, useCallback }  from 'react';
import { Wrap, Back, MiddleWrap, RoomSection, UserSection, StyledTitle, StyledInput, StyledForm, RoomButton, LineWrap, Enter } from './style';
import { MENU, GAME_STATUS } from '../../../config/constants';
import {Context} from '../../../reducer';
import SocketContext from '../../../sockets/context';
import { createRoom, enterRoom } from '../../../sockets/emit';

const RoomLine = ({name, own}) => {
    return (
        <LineWrap>
            <p>{name}</p>
            <Enter onClick={() =>  enterRoom(name)}>Enter</Enter>
        </LineWrap>
    )
}

const Menu = ({callback}) => {
    const {store, dispatch} = useContext(Context)
    const { users, rooms } = useContext(SocketContext);
    let input;
    // if (rooms) console.log(rooms, users)
    // console.log(store)
    return (
        <Wrap>
            <Back onClick={() => callback({type: GAME_STATUS, gameStatus: MENU})} >Back</Back>
            <MiddleWrap>
                <RoomSection>
                    <StyledTitle>Rooms</StyledTitle>
                    {
                        rooms ? 
                            rooms.map((room, i) => <RoomLine own={room.owner} name={room.name} key={i}></RoomLine>) 
                            : users ? users.roomlist.map((room, i) => <RoomLine own={room.owner} name={room.name} key={i}></RoomLine>)
                                    : null
                    }
                </RoomSection>
                <UserSection>
                    <StyledTitle>Players</StyledTitle>
                    {
                        users ? 
                            users.userlist.map((usr, i) => <p key={i}>{usr}</p>) 
                            : null
                    }
                </UserSection>
            </MiddleWrap>
            <StyledForm onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    createRoom(input.value)
                    input.value = ''
                }} >
                <StyledInput
                    ref={node => (input = node)}
                    placeholder="Enter a room name" />
                <RoomButton type="submit">Create room</RoomButton>
            </StyledForm>
            
        </Wrap>
    )
}

export default Menu;