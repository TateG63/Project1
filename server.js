const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const { url, method } = req;
    console.log(`Request received: ${method} ${url}`);

    if (method === 'GET') {
        let filePath;

        // Map routes to HTML files
        switch (url) {
            case '/':
                filePath = path.join(__dirname, 'public', 'home.html');
                break;
            case '/route1':
                filePath = path.join(__dirname, 'public','project.html');
                break;
            case '/route2':
                filePath = path.join(__dirname, 'public','about.html');
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                return res.end('404 Not Found');
        }

        // Check if file exists before reading
        if (!fs.existsSync(filePath)) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found - File does not exist');
        }

        // Read and serve the file
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Internal Server Error');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
