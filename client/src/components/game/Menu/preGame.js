import React, { useContext, useState, useEffect }  from 'react';
import { Wrap, Back, MiddleWrap, RoomSection, UserSection, StyledTitle, StyledInput, StyledForm, RoomButton, LineWrap, Enter } from './style';
import { MENU, GAME_STATUS, USER_LIST } from '../../../config/constants';
import {Context} from '../../../reducer';
import SocketContext from '../../../sockets/context';
import { createRoom, enterRoom } from '../../../sockets/emit';

const RoomLine = ({room, i}) => {
    // console.log(room)
    return (
        <LineWrap>
            {
                room.users.length < 2 ? <Enter onClick={() =>  enterRoom(room.name, i)}>{room.name}</Enter>
                                        : null
            }
            
        </LineWrap>
    )
}

const Pregame = ({callback}) => {
    const {store, dispatch} = useContext(Context)
    let input;
    // console.log('update',store)
    console.log(callback)
    
    return (
        <Wrap>
            <Back onClick={() => callback({type: GAME_STATUS, gameStatus: USER_LIST})} >Back</Back>
            <MiddleWrap>
                <RoomSection>
                    <StyledTitle>Rooms</StyledTitle>
                    {
                        store.rooms.length > 0 ? 
                        store.rooms.map((room, i) => <RoomLine  room={room} i={i} key={i}></RoomLine>) 
                                    : null
                    }
                </RoomSection>
                <UserSection>
                    <StyledTitle>Players</StyledTitle>
                    {
                        store.users.map((usr, i) => <p key={i}>PLAYER{i+1}</p>) 
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

export default Pregame;