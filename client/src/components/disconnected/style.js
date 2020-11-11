import styled from 'styled-components';

export const Wrap = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(162,206,244,1) 50%, rgba(0,0,0,1) 100%);
`;

export const InfoPanel = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 200px;
    border: 8px solid rgb(162,206,244);
    border-radius: 14px;
`;

export const P = styled.p`
    margin: 0;
`;

export const Title = styled.h2`
    position: absolute;
    top: 0;
    font-size: 1rem;
`;