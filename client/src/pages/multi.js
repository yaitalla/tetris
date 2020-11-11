import React, {useContext} from 'react';
import { Context } from '../reducer';
import { Wrapped } from '../../styles/style';
import Head from 'next/head';
import SocketProvider from '../sockets';
import Menu from '../containers/Menu';
import Room from '../containers/Room';
import { LOBBY, INROOM } from '../constants';
import DiscoPage from '../components/disconnected';

const Game = () => {
    const {store} = useContext(Context)

    return (
    <Wrapped>
      <Head>
      <title>Tetris2020</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SocketProvider>
        {
          store.status === LOBBY ? <Menu /> : 
          store.status === INROOM ? <Room /> : <DiscoPage />
        }
        
      </SocketProvider>
    </Wrapped>
  )
}

export default Game;