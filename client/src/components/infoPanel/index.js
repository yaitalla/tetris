import React, {useContext} from 'react';
import { Wrap, StyledDisplay, StartButton } from './style';
import NextShape from '../nextShape';
import { TETROMINOS } from '../../tetrominos';
import {SoloContext} from '../../containers/Solo/reducer';
import dynamic from 'next/dynamic';

const NoSSRNextShape = dynamic(() => import('../nextShape'), {
    ssr: false
})

const InfoPanel = ({ns, cb}) => {
    const {store, dispatch} = useContext(SoloContext)
    return (
        <Wrap>
            <StyledDisplay>Score: 0</StyledDisplay>
            <StyledDisplay>rows: 0</StyledDisplay>
            <StyledDisplay>Level: 1</StyledDisplay>
            <NoSSRNextShape shape={ns} />
            <StartButton onClick={() => cb()} >
                {
                    store?.playing?
                    "pause" : "start"
                }
            </StartButton>
        </Wrap>
    )
}

export default InfoPanel;