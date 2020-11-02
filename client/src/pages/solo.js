import React, {useReducer} from 'react';
import Survie from '../containers/Solo';
import { soloReducer, soloState, SoloContext } from '../containers/Solo/reducer';

const Solo = () => {
    const [store, dispatch] = useReducer(soloReducer, soloState)
    return (
        <SoloContext.Provider value={{store, dispatch}}>
            <Survie/>
        </SoloContext.Provider>
    )
}

export default Solo;