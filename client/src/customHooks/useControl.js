import { useState, useCallback } from 'react';
import { TETROMINOS } from '../tetrominos';
import { FIELD_WIDTH, checkCollision } from '../misc';

export const useControl = (shapes) => {
    const [control, setControl] = useState({
        pos: {x: 0, y: 0},
        tetromino: TETROMINOS[0].shape,
        collided: false,
        i: 0
    })

    const rotateMatrix = (matrix, way) => {
        const rotated = matrix.map((_, index) =>
            matrix.map(column => column[index])
        )
        if (way > 0) {
            return rotated.map(row => row.reverse());
        }
        return rotated.reverse();
    }

    const rotate = (field, way) => {
        const clone = JSON.parse(JSON.stringify(control));
        clone.tetromino = rotateMatrix(clone.tetromino, way);
        const pos = clone.pos.x;
        let offset = 1;
        while(checkCollision(clone, field, { x: 0, y: 0 } )) {
            clone.pos.x += offset;
            offset = -( offset + ( offset > 0 ? 1 : -1 ) );
            if (offset > clone.tetromino[0].length) {
                rotateMatrix(clone.tetromino, -way);
                clone.pos.x = pos;
                return;
            }
        }
        setControl(clone);
    }
    const position = ( { x, y, collided } ) => {
        setControl(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
            collided
        }))
    }
    const reset = useCallback( async (shapeIndex, shapes) => {
        const shapesToPrint = await shapes;
        setControl(
            {
                pos: { x: FIELD_WIDTH / 2 - 2, y: 0 },
                tetromino: shapesToPrint[shapeIndex].shape,
                collided: false,
                i: shapeIndex
            }
        )
    }, [])
    return [control, position, reset, rotate];
}