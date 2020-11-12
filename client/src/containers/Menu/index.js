import React, {useContext, memo} from 'react';
import Link from 'next/link';
import UserList from '../../components/userList';
import RoomList from '../../components/roomList';
import { TabWrap, Wrapped } from './style';
import { Context } from '../../reducer';
import DefaultLinkBtn from '../../components/defaultButton';

const Menu = () => {
    const {store} = useContext(Context)
    console.log('/menu', store)
    const checker = () => {
      return (
          store.users.indexOf(store.my_id) + 1
        )
    }
    return (
        <Wrapped>
            
            <TabWrap>
                <UserList />
                <RoomList />
            </TabWrap>
            { store.my_id ?
                <p>{"you are: Player "+ checker() }</p>
                : null
            }
            <DefaultLinkBtn to="/" text="retour" />
        </Wrapped>
    )
}

export default Menu;