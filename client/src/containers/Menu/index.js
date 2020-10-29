import React, {useContext, memo} from 'react';
import Link from 'next/link';
import UserList from '../../components/userList';
import RoomList from '../../components/roomList';
import { TabWrap, StyledA } from './style';
import { Context } from '../../reducer';

const Menu = () => {
    const {store} = useContext(Context)
    console.log('/menu', store)
    const checker = () => {
      return (
          store.users.indexOf(store.my_id) + 1
        )
    }
    return (
        <>
            <TabWrap>
                <UserList />
                <RoomList />
            </TabWrap>

            { store.my_id ?
                <p>{"you are: Player "+ checker() }</p>
                : null
            }

            <Link passHref href="/" >
                <StyledA>retour</StyledA>
            </Link>
        </>
    )
}

export default Menu;