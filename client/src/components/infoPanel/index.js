import React, {useContext} from 'react';
import { Wrap, StyledDisplay, StartButton } from './style';
import NextShape from '../nextShape';
import { TETROMINOS } from '../../tetrominos';
import {SoloContext} from '../../containers/Solo/reducer';
import dynamic from 'next/dynamic';
import { WAITING, PLAYING } from '../../constants';

const NoSSRNextShape = dynamic(() => import('../nextShape'), {
    ssr: false
})

const InfoPanel = ({ns, cb, rows, score}) => {
    const {store, dispatch} = useContext(SoloContext)
    return (
        <Wrap>
            <StyledDisplay>Score: {score}</StyledDisplay>
    <StyledDisplay>rows: {rows}</StyledDisplay>
            <StyledDisplay>Level: 1</StyledDisplay>
            <NoSSRNextShape shape={ns} />
            <StartButton onClick={() => cb()} >
                {
                    store?.playing === WAITING ? "start"
                    : store?.playing === PLAYING ? "pause"
                    : "play"
                }
            </StartButton>
        </Wrap>
    )
}

export default InfoPanel;