import React, {memo} from 'react';
import { Wrap, StyledDisplay, StartButton } from './style';
import dynamic from 'next/dynamic';
import { WAITING, PLAYING } from '../../constants';

const NoSSRNextShape = dynamic(() => import('../nextShape'), {
    ssr: false
})

const InfoPanel = ({rows, cb, ns, score, status}) => {
    // console.log(rows)
    return (
        <Wrap>
            <StyledDisplay>Score: {score}</StyledDisplay>
            <StyledDisplay>rows: {rows}</StyledDisplay>
            <StyledDisplay>Level: 1</StyledDisplay>
            <NoSSRNextShape shape={ns} status={status} />
            <StartButton onClick={() => cb()} >
                {
                    status === WAITING ? "start"
                    : status === PLAYING ? "pause"
                    : "play"
                }
            </StartButton>
        </Wrap>
    )
}

export default memo(InfoPanel);