import React from 'react';
import {StyledCell} from './styles/StyledCell';
import {TETROMINOS } from '../../../config/tetrominos';

const Cell = ({ type, i }) => {
    return (
        <StyledCell type={type} color={TETROMINOS[type].color} ></StyledCell>
    )
}

export default React.memo(Cell);