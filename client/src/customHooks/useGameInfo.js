import { useState, useEffect, useCallback } from 'react';

export const useGameInfo = clearedRows => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);
    const [bonus, setBonus] = useState(false);

    const linePoints = [100, 200, 300, 800];

    const computeScore = useCallback(() => {
        if (clearedRows > 0) {
            const tetris = clearedRows === 4;
            const bonusReward = bonus ? 400 : 0;
            setScore(score + linePoints[clearedRows - 1] + bonusReward);
            setRows(prev => prev + clearedRows);
            setBonus(tetris);
        }
    }, [level, linePoints, clearedRows])

    useEffect(() => {
        computeScore();
    }, [computeScore, clearedRows, score])

    return [score, rows, level, setLevel];
}