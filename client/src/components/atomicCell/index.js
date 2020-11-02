import React, { memo } from 'react';
import { StyledCell } from './style';
import { TETROMINOS } from '../../tetrominos';

const Cell = ({ type, i }) => {
    // console.log("cell:", type, i)
    return (
        <StyledCell type={type}
            color={TETROMINOS[type].color}
        ></StyledCell>
    )
}

export default Cell;