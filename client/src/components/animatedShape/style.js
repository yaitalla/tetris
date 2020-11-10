import styled, {keyframes} from 'styled-components';

const grow = keyframes`
    0%{
        opacity: 1;
        transform: scale(0.1) rotate(0deg);
    }
    100%{
        transform: scale(6) rotate(1800deg);
        opacity: 0;
    }
`;

export const Field = styled.div `
    display: grid;
    align-self: center;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(8vw / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    width: 100%;
    max-width: 8vw;
    background: transparent;
`;

export const Cell = styled.div`
    width: 100%;
    background: rgb(${props => props.color});
    opacity: ${props => props.opacity};
    border: ${props => (props.border === 0 ? '0px solid' : '1px solid black')};
`;

export const Wrap = styled.div`
    padding: 0;
    position: absolute;
    opacity: 0;
    height: 100px;
    width: 100px;
    transform: scale(0.1) rotate(0deg) translate(${props => props.ratio});
    animation: ${grow} 10s forwards;
    &:nth-of-type(2) {
        animation-delay: 5s;
      }
      &:nth-of-type(3) {
        animation-delay: 10s;
      }
      &:nth-of-type(4) {
        animation-delay: 15s;
      }
      &:nth-of-type(5) {
        animation-delay: 20s;
      }
      &:nth-of-type(6) {
        animation-delay: 25s;
      }
      &:nth-of-type(7) {
        animation-delay: 30s;
      }
      &:nth-of-type(8) {
        animation-delay: 35s;
      }
      &:nth-of-type(9) {
        animation-delay: 40s;
      }
      &:nth-of-type(10) {
        animation-delay: 45s;
      }
      &:nth-of-type(11) {
        animation-delay: 50s;
      }
      &:nth-of-type(12) {
        animation-delay: 55s;
      }
      &:nth-of-type(13) {
        animation-delay: 60s;
      }
      &:nth-of-type(14) {
        animation-delay: 65s;
      }
      &:nth-of-type(15) {
        animation-delay: 70s;
      }
      &:nth-of-type(16) {
        animation-delay: 75s;
      }
      &:nth-of-type(17) {
        animation-delay: 80s;
      }
      &:nth-of-type(18) {
        animation-delay: 85s;
      }
      &:nth-of-type(19) {
        animation-delay: 90s;
      }
      &:nth-of-type(20) {
        animation-delay: 95s;
      }
`;