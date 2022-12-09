const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    console.log("🚀 ~ file: helloworld-01.js:7 ~ server ~ path", path)
    
    switch(path) {
        case '':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('Hello Pranav!');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('Hello about!');
            break;
        default:
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('Not found!');
            break;
    }
    // res.writeHead(200, {'Content-Type': 'text/html'})
    // res.end('Hello Pranav!')
})
server.listen(port, () => console.log(`server started on port ${port};` + ' Press Ctrl-C to terminate...'))