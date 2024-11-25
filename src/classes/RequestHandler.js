class RequestHandler {
    constructor(io) {
      this.io = io;  // The socket.io server instance
    }
  
    handleRequest() {
      this.io.on('connection', (socket) => {
        console.log('A user connected');
  
        // Handle incoming request (example_event)
        socket.on('example_event', (data) => {
          console.log('Received from client:', data);
          // You can process data here and send a response back
          socket.emit('example_response', { message: 'Request processed' });
        });
  
        // Handle disconnection
        socket.on('disconnect', () => {
          console.log('A user disconnected');
        });
      });
    }
  }
  
  module.exports = RequestHandler;
  