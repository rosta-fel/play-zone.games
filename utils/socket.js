class SocketUtil {
    static initialize(io) {
        io.on('connection', (socket) => {
            socket.on('message', (data) => {
                io.emit('message', data);
            });
        });
    }
}

export default SocketUtil;