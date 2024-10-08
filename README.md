---

# Node.js Basic Web Server

This is a basic Node.js web server that serves static HTML pages for different routes such as the homepage, an about page, and a contact page. It also handles non-existent routes by displaying a custom 404 error page. The server port is managed through an environment variable.

## Features

- Serves static HTML files.
- Supports basic routes (`/`, `/about`, `/contact`).
- Custom 404 page for non-existent routes.
- Uses environment variable for setting the port number.
- Implements asynchronous file handling with `fs.promises`.

## Project Structure

```
/public
    ├── 404.html           # 404 Error page
    ├── about.html         # About page
    ├── contact-me.html    # Contact page
    ├── index.html         # Homepage
server.js                  # Server logic
package.json               # Project dependencies and scripts
```

## Prerequisites

- Node.js installed on your machine.

## Installation

1. **Clone the repository**:

   ```bash
   git clone <your-repo-url>
   cd <your-repo-directory>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file**:

   Create a `.env` file in the project root and add the following line:

   ```bash
    PORT= # set your desired port number
   ```

4. **Run the server**:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:your-port-number`.

## Usage

- Visit `http://localhost:your-port-number` for the homepage.
- Navigate to `/about` for the about page.
- Navigate to `/contact` for the contact page.
- Any non-existent routes will display the custom 404 page.

## License

This project is licensed under the MIT License.

---
