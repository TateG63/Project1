In this project we have purely used Node.js to build lightweight web server without using any external packages.
It serves a three-page web application with dedicated routes: / (home), /projects (projects), and /about (about).
The server follows RESTful principles, handles basic request-response cycles, and serves static HTML files dynamically. 
Built with ES6+ syntax, it utilizes http, fs, and path modules to handle requests efficiently.
To maintain a clean and modular structure, HTML files are stored separately, and the server dynamically detects MIME types to serve additional assets like CSS and images.
