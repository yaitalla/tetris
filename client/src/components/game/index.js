import React from 'react';
import { connect } from 'react-redux';
import { GameScreen } from './style';

const Game = ({actualRoom, message, score, falling, users}) => {
    return (
        <GameScreen>
            <p>actualRoom: {actualRoom}</p>
            <p>score: {score}</p>
            <p>message: {message}</p>
            <p>users: {users}</p>
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
        falling: state.falling
    }
}


export default connect(mapStateToProps)(Game);