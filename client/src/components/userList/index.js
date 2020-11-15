import React, {useContext} from 'react';
import { Context } from '../../reducer';
import { Wrap, Line, Title } from './style';



const UserList = () => {
    const {store} = useContext(Context)
    const DisplayLine = () => {
        return (
            <Line>
                {}
            </Line>
        )
    }
    return (
        <Wrap>
            <Title>connected players</Title>
            {
                store.users ?
                store.users.map((usr, i) => <Line key={i} >{"Player"+(i+1)}</Line>)
                : null
            }
        </Wrap>
    )
}

export default UserList;