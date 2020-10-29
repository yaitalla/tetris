import styled from 'styled-components';

export const Wrapped = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    background: lightgrey;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
