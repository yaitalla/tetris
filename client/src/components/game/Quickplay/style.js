import styled from 'styled-components';

export const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: silver;
    background-size: cover;
    overflow: hidden;
`;

export const Screen = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`;

export const SideScreen = styled.aside`
    border: 1px solid pink;
    display: flex;
    justify-content: center;
`;

export const StyledStartButton = styled.button `
    box-sizing: border-box;
    margin: 0 0 20px 0;
    padding: 20px;
    min-height: 30px;
    border-radius: 20px;
    border: none;
    color: white;
    background: #333;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
`

export const Sider = styled.aside`
    border: 1px solid pink;
    display: flex;
    justify-content: center;
`;