import React, {useContext} from 'react';
import { Context } from '../reducer';
import {Wrapped, StyledA, TabWrap} from './style';
import Link from 'next/link';
import SocketProvider from '../sockets';
import UserList from '../components/userList';
import RoomList from '../components/roomList';

const Menu = () => {
    const {store} = useContext(Context)
    const checker = () => {
      return (
          store.users.indexOf(store.my_id) + 1
        )
    }
    return (
    <Wrapped>
      <SocketProvider>
        <TabWrap>
          <UserList />
          <RoomList />
        </TabWrap>

        {
          store.my_id ? <p>{"you are: Player "+ checker() }</p>
          : null
        }

        <Link passHref href="/" >
          <StyledA>retour</StyledA>
        </Link>

      </SocketProvider>
    </Wrapped>
  )
}

export default Menu;