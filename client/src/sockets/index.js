import React, { useState, useEffect, useContext, createContext } from "react";
import SocketContext from "./context";
import { initSockets } from "./events";
import {Context} from '../reducer';

// const Context = createContext();
const SocketProvider = (props) => {
  const [value, setValue] = useState({});
  const {store, dispatch} = useContext(Context)
  useEffect(() => initSockets( {setValue, dispatch} ), [setValue, dispatch]);
  // console.log("store",store)
  // console.log("value",value)
  return(
      <SocketContext.Provider value={ value }>
        { props.children }
      </SocketContext.Provider>
    )
};
export default SocketProvider;