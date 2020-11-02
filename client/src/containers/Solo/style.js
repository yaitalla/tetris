import styled from 'styled-components';

export const StyledA = styled.a`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    &:hover{
        border: 1px solid blue;
        border-radius: 5px;
    }
`;


export const Wrapped = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    background: lightgrey;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledFrame = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;
    width: 100%;
    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`;