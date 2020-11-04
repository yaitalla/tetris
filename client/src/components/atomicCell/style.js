import styled from 'styled-components';

export const StyledCell = styled.div `
    width: auto;
    background: rgba(${props => props.color}, ${props => props.type === 1 ? '0.1' : '0.8'});
    border: ${props => (props.type === 0 || props.type === 1 ? '0px solid' : '2px solid')};
    border-bottom-color: rgba(${props => props.color}, ${props => props.type === 1 ? '0.1' : '1'});
    border-right-color: rgba(${props => props.color}, ${props => props.type === 1 ? '0.1' : '2'});
    border-top-color: rgba(${props => props.color}, ${props => props.type === 1 ? '0.1' : '2'});
    border-left-color: rgba(${props => props.color}, ${props => props.type === 1 ? '0.1' : '3'});
`;

export const StyledCellN = styled.div `
    width: auto;
    background: rgba(${props => props.color}, 0.8);
    border: ${props => (props.type === 0 ? '0px solid' : '1px solid')};
`;