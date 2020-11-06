import '../../styles/globals.css'
import React, { useReducer } from 'react';
import { reducer, initialState, Context } from '../reducer';
import PropTypes from 'prop-types';

const MyApp = ({ Component, pageProps }) => {
  const [store, dispatch] = useReducer(reducer, initialState)
  
  return (
    <Context.Provider value={{store, dispatch}} >
      <Component {...pageProps} />
    </Context.Provider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp
