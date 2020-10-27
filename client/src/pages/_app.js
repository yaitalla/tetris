import '../../styles/globals.css'
import React, { useReducer } from 'react';
import { reducer, initialState, Context } from '../reducer';

const MyApp = ({ Component, pageProps }) => {
  const [store, dispatch] = useReducer(reducer, initialState)
  
  return (
    <Context.Provider value={{store, dispatch}} >
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
