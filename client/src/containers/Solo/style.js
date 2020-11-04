import styled from 'styled-components';

export const StyledA = styled.a`
    margin-left: 200px;
    padding: 10px;
    min-height: 20px;
    border-radius: 4px;
    background: grey;
    color: black;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    align-self: flex-end;
    cursor: pointer;
    &:hover{
        background: red;
        color: white;
    }
`;
export const StartButton = styled.button `
    box-sizing: border-box;
    width: 100%;
    margin: 0 0 20px 0;
    padding: 20px;
    border-radius: 5px;
    border: none;
    color: white;
    background: #333;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    text-decoration: none;
    cursor: pointer;
`;

export const Wrapped = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    position: relative;
    background: lightgrey;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const StyledFrame = styled.div`
    display: flex;
    align-items: center;
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