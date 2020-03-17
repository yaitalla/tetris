import styled from 'styled-components';

export const StyledStage = styled.div `
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(25vw / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 25vw;
    background: #111;
`;
export const DisplayP = styled.p`
    font-family: Pixel, Aria, Helvetica, sans-serif;
    color: #999;
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 20px 0;
    border 2px solid #333;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    color: #999;
    background: #000;
    font-family: Pixel, Aria, Helvetica, sans-serif;
    font-size: 0.8rem;
`;
export const StyledStageN = styled.div `
    display: grid;
    align-self: center;
    padding: 20px;
    margin: 0 0 10px 0;
    border 4px solid #333;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(10vw / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    width: 100%;
    max-width: 10vw;
    background: #111;
`;