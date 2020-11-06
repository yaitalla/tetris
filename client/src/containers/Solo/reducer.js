import {createContext} from 'react';
import { PLAYING, STATUS, SHAPES, WAITING } from '../../constants';
import { tenMoreShapes, CHEAT_SHAPES } from '../../tetrominos';

const SoloContext = createContext();

const soloState = {
    playing: WAITING,
}

const soloReducer = (soloState, action) => {
    switch(action.type){
        case PLAYING:
            return {
                ...soloState,
                playing: action.playing
            }
    }
}


export {
    soloState,
    soloReducer,
    SoloContext
}