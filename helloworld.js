const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('Hello Pranav!')
})
server.listen(port, () => console.log(`server started on port ${port};` + ' Press Ctrl-C to terminate...'))