import styled from 'styled-components';

export const Wrap = styled.aside`
    display: flex;
    justify-content: center;
    height: 100%;
    
`;

export const StyledDisplay = styled.div `
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: 20px 0 20px 0;
    padding: 20px;
    border 2px solid #333;
    min-height: 30px;
    width: 100%;
    border-radius: 5px;
    color: ${props => (props.gameOver ? 'red' : '#999')};
    background: #000;
    font-family: Pixel, Aria, Helvetica, sans-serif;
    font-size: 0.8rem;
`;

export const StartButton = styled.button `
    width: 100%;
    padding: 8px 0 2px 0;
    border-radius: 5px;
    border: none;
    color: black;
    background: #666;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: 0.5s ease;
    &:hover{
        background: black;
        color: white
    }
`;
