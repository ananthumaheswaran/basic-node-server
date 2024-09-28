# basic-node-server

# Node Basic Server

A simple Node.js server to handle HTTP requests and serve static HTML files.

## Features

- Serves static HTML files for different routes.
- Handles 404 errors for undefined routes.
- Basic MIME type handling for serving different file types.
- Custom error page for server errors.

## Project Structure

```bash
.
├── public
│   ├── 404.html          # Homepage
│   ├── about.html        # About page
│   ├── contact-me.html   # Contact page
│   └── index.html        # 404 Error page
├── server.js             # Main server file
└── README.md             # Project documentation
