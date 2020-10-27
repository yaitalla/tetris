import React, {useState, useEffect, useContext} from 'react';
import SocketContext from './context';
import { initSockets } from './events';
import { Context } from '../reducer';

const SocketProvider = (props) => {
    const [value, setValue] = useState({});
    const {dispatch} = useContext(Context);
    useEffect(() => initSockets( {setValue, dispatch} ), [setValue, dispatch]);

    return (
        <SocketContext.Provider value={value} >
            { props.children }
        </SocketContext.Provider>
    )
}

export default SocketProvider;