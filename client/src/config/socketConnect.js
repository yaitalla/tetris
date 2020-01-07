
import io from 'socket.io-client'

const socket = io.connect('localhost:4000')

export default socket;