import styled from 'styled-components';

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
export const NextShapeField = styled.div `
    display: grid;
    align-self: center;
    padding: 2px;
    margin: 10px;
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

export const NextShapeCell = styled.div`
    width: 100%;
    background: rgba(${props => props.color}, 0.8);
    border: ${props => (props.border === 0 ? '0px solid' : '1px solid')};
`;