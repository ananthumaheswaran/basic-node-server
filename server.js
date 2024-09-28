import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const port = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  try {
    // Check if GET request
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else if (req.url === "/contact") {
        filePath = path.join(__dirname, "public", "contact-me.html");
      } else {
        filePath = path.join(__dirname, "public", "404.html");
      }
      const data = await fs.readFile(filePath);
      res.writeHead(200, "Content-Type", "text/html");
      res.write(data);
      res.end();
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("<h1>Server Error</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
