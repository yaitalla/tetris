import styled from 'styled-components';


export const TabWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 1px solid red;
`;

export const StyledA = styled.a`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    &:hover{
        border: 1px solid blue;
        border-radius: 5px;
    }
`;