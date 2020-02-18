import styled, {keyframes} from 'styled-components';

const grossir = keyframes`
    from {
        transform:scale(1)
    }

    to {
        transform:scale(1.1)
    }
`;
export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: black;
    border: 2px solid yellow;
`
export const Back = styled.button`
    border: 1px solid white;
    left: 80%;
    position: absolute;
    top: 3%;
    font-family: TextSF, Arial;
    color: red;
    font-size: 1rem;
    height: 80px;
    width: 100px;
    background: transparent;
    cursor: pointer;
    border: 1px solid silver;
    border-radius: 50%;
    &:hover{
        color: black;
        background-color: white;
        animation: ${grossir} .5s infinite alternate linear;
    }
`;
export const Enter = styled.button`
    border: 1px solid white;
    left: 80%;
    font-family: TextSF, Arial;
    color: red;
    font-size: 1rem;
    height: 44px;
    width: 100px;
    background: transparent;
    cursor: pointer;
    border: 1px solid silver;
    border-radius: 10px;
`;
export const MiddleWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70%;
    border: 1px solid pink;
`;
export const RoomSection = styled.div`
    display: flex;
    color: white;
    width: 50%;
    height: 100%;
    flex-direction: column;
    border: 1px solid silver;
`;
export const LineWrap = styled.div`
    color: white;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
`;
export const UserSection = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    color: white;
    flex-direction: column;
    border: 1px solid silver;
`;

export const StyledTitle = styled.h2`
    font-family: TextSF, Arial;
    border-bottom: 1px solid silver;
    height: 50px;
`;

export const StyledInput = styled.input`
    width: 300px;
    height: 40px;
    background-color: silver;
    font-family: TextSF, Arial;
    border-radius: 10px;
    font-size: 20px;
`;
export const RoomButton = styled.button`
    border: 1px solid white;
    font-family: TextSF, Arial;
    color: red;
    font-size: 1rem;
    height: 44px;
    width: 100px;
    background: transparent;
    cursor: pointer;
    border: 1px solid silver;
    border-radius: 10px;
    &:hover{
        color: black;
        background-color: white;
        animation: ${grossir} .5s infinite alternate linear;
    }
`;

export const StyledForm = styled.form`
    margin-top: 15px;
    display: flex;
    width: 60%;
    justify-content: space-evenly;
    flex-direction: row;
`;

