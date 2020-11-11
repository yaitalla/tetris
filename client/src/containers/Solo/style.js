import styled from 'styled-components';

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
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(162,206,244,1) 50%, rgba(0,0,0,1) 100%);
    position: relative;
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