import React, {memo} from 'react';
import { Wrap, StyledDisplay, StartButton } from './style';
import dynamic from 'next/dynamic';
import { WAITING, PLAYING, GAME_OVER } from '../../constants';

const NoSSRNextShape = dynamic(() => import('../nextShape'), {
    ssr: false
})

const InfoPanel = ({rows, cb, ns, score, status, level, dp}) => {
    // console.log(rows)
    return (
        <Wrap>
            <StyledDisplay>Score: {score}</StyledDisplay>
            {
                status === GAME_OVER ?
                    <StyledDisplay>game over</StyledDisplay>
                :
                <>
                    <StyledDisplay>rows: {rows}</StyledDisplay>
                    <StyledDisplay>Level: {level} </StyledDisplay>
                    <StyledDisplay>
                        drop:  {
                                    dp < 1000 ? "0."+dp/100+" sec"
                                    : "1 sec"
                                } 
                    </StyledDisplay>
                    <NoSSRNextShape shape={ns} status={status} />
                </>
            }
            <StartButton onClick={() => cb()} >
                {
                    status === WAITING ? "start"
                    : status === PLAYING ? "pause"
                    : status === GAME_OVER ? "retry"
                    : "play"
                }
            </StartButton>
        </Wrap>
    )
}

export default memo(InfoPanel);