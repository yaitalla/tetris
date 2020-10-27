import React, {useState} from 'react'
import {Wrapped, StyledA} from './style';
import Link from 'next/link';
import SocketProvider from '../sockets';
import UserList from '../components/userList';

const Menu = () => {
  return (
    <Wrapped>
      <SocketProvider>

        <UserList />
        <Link passHref href="/" >
          <StyledA>retour</StyledA>
        </Link>

      </SocketProvider>
    </Wrapped>
  )
}

export default Menu;