const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

function serveStaticFIle(res, path, contentType, responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
        if(err) {
            res.writeHead(500, {'Content-Type': 'text/plain'})
            return res.end('500 - Internam Error')
        }
        res.writeHead(responseCode, {'Content-Type': contentType})
        res.end(data)
    })
}

const server = http.createServer((req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

    switch(path) {
        case '':
            serveStaticFIle(res, '/public/home.html', 'text/html')
            break;
        case '/about':
            serveStaticFIle(res, '/public/about.html', 'text/html')
            break;
        default:
            serveStaticFIle(res, '/public/404.html', 'text/html')
            break;
    }
})
.listen(port)