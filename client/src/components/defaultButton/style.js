import styled from 'styled-components';

export const StyledA = styled.a`
    width: 150px;
    padding: 8px 0 2px 0;
    margin: 8px 0 2px 0;
    border-radius: 5px;
    border: none;
    text-align: center;
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