import {createContext} from 'react';
import { PLAYING, STATUS, SHAPES, WAITING } from '../../constants';
import { tenMoreShapes } from '../../tetrominos';

const SoloContext = createContext();

const soloState = {
    playing: WAITING,
    shapes: tenMoreShapes([]),
    i: 0
}

const soloReducer = (soloState, action) => {
    // console.log(action.type)
    switch(action.type){
        case PLAYING:
            return {
                ...soloState,
                playing: action.playing
            }
        case SHAPES:
            return {
                ...soloState,
                shapes: action.shapes
            }
    }
}


export {
    soloState,
    soloReducer,
    SoloContext
}