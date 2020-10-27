import io from "socket.io-client";
const SOCKET_API_URL = "http://localhost:4000";
const socket = io(SOCKET_API_URL);

const SocketEvents = ( setValue ) => {
    socket.on("", () => {

    })
}

export const initSockets = ( { setValue }) => {
    SocketEvents( setValue );
}