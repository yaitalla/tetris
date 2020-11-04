import { useState, useEffect, useCallback } from 'react';

export const useGameInfo = clearedRows => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);
    const [bonus, setBonus] = useState(false);

    const linePoints = [100, 200, 300, 400];

    const computeScore = useCallback(() => {
        if (clearedRows > 0) {
            const tetris = clearedRows === 4;
            setScore(prev =>
                prev
                + linePoints[clearedRows - 1]
                + tetris ? bonus ? 800 : 400 : 0
            )
            setRows(prev => prev + clearedRows)
            setBonus(tetris)
        }
    }, [level, linePoints, clearedRows])

    useEffect(() => {
        computeScore();
    }, [computeScore, clearedRows, score])

    return [score, setScore, rows, setRows, level, setLevel];
}