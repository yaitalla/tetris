import React from 'react';
import Link from 'next/link';
import {StyledA} from './style';

const DefaultLinkBtn = ({to, text, newtab}) => 
    <Link passHref href={to} >
        <StyledA target={newtab ? "_blank": "_self"} >{text}</StyledA>
    </Link>

export default DefaultLinkBtn;