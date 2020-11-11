import React from 'react';
import Link from 'next/link';
import { Wrap, InfoPanel, Title, P } from './style';
import DefaultLinkBtn from '../defaultButton';

const DiscoPage = () => {
    return (
        <Wrap>
            <InfoPanel>
                <Title>
                    multiplayer is not supported on this Demo version
                </Title>
                <DefaultLinkBtn newtab={true} to="https://github.com/yaitalla/tetris" text="download the project" />
            </InfoPanel>
            <DefaultLinkBtn to="/" text="go back" />
            <DefaultLinkBtn to="/solo" text="try solo" />
        </Wrap>
    )
}

export default DiscoPage;