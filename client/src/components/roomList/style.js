import styled from 'styled-components';

export const Wrap = styled.section`
    display: flex;
    width: 30%;
    height: 60%;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 5px;
`;

export const Line = styled.p`
    margin: 0;

`;

export const StyledA = styled.a`
    text-decoration: none;
    color: black;
    height: 50px;
    border: 1px solid ;
    display: flex;
    justify-content: space-around;
    &:hover{
        cursor: pointer;
    }
`;

export const NavLink = styled.div`

`;