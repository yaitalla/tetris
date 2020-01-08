import React from 'react';
import { connect } from 'react-redux';
import { GameScreen, UserLine } from './style';

const Users = ({data}) => {
    console.log(data)
    return (
        <UserLine>
            {
                data.map((usr, i) => {
                    <h4 key={i} > {usr} </h4>
                })   
            }
         </UserLine>
    )
}

const Game = ({actualRoom, message, score, falling, users}) => {
    return (
        <GameScreen>
            <p>actualRoom: {actualRoom}</p>
            <p>score: {score}</p>
            <p>message: {message}</p>
             <Users data={users}/>
            <p>falling: {falling ? "true" : "false"}</p>
        </GameScreen>
    )
}

const mapStateToProps = (state) => {
    return {
        actualRoom: state.actualRoom,
        message: state.message,
        score: state.score,
        users: state.users,
        falling: state.falling,
        id: state.yourID
    }
}


export default connect(mapStateToProps)(Game);