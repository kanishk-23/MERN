// const http = require("http");
// const fs = require("fs").promises;
// const path = require("path");

// const PUBLIC_DIR = path.join(__dirname, "public");
// const PORT = 3000;

// // Simple MIME map/object
// const MIME = {
//   ".html": "text/html; charset=utf-8",
//   ".css":  "text/css; charset=utf-8",
//   ".js":   "application/javascript; charset=utf-8",
//   ".png":  "image/png",
//   ".jpg":  "image/jpg",
//   ".jpeg": "image/jpeg",
//   ".svg":  "image/svg+xml",
//   ".json": "application/json; charset=utf-8",
//   ".txt":  "text/plain; charset=utf-8"
// };

// // Safe file responder using fs.promises
// async function serveFile(res, relPath, statusCode = 200) {
//   try {
//     const filePath = path.join(PUBLIC_DIR, relPath);

//     // Prevent directory traversal attacks
//     if (!filePath.startsWith(PUBLIC_DIR)) {
//       res.statusCode = 400;
//       res.setHeader("Content-Type", "text/plain; charset=utf-8");
//       return res.end("400 Bad Request");
//     }

//     const ext = path.extname(filePath) || ".html";
//     const content = await fs.readFile(filePath);
//     res.statusCode = statusCode;
//     res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
//     res.end(content);
//   } catch (err) {
//     if (err.code === "ENOENT") {
//       // file not found
//       res.statusCode = 404;
//       res.setHeader("Content-Type", "text/html; charset=utf-8");
//       const fallback = path.join(PUBLIC_DIR, "404.html");
//       try {
//         const data = await fs.readFile(fallback, "utf-8");
//         return res.end(data);
//       } catch {
//         return res.end("<h1>404 - Not Found</h1>");
//       }
//     } else {
//       console.error("Server error:", err);
//       res.statusCode = 500;
//       res.setHeader("Content-Type", "text/plain; charset=utf-8");
//       res.end("500 - Internal Server Error");
//     }
//   }
// }

// const server = http.createServer(async (req, res) => {
//   const url = new URL(req.url, `http://${req.headers.host}`);
//   const pathname = url.pathname.replace(/\/+$/, "") || "/"; // normalize

//   // Redirect root to /home
//   if (pathname === "/") {
//     res.statusCode = 302;
//     res.setHeader("Location", "/home");
//     return res.end();
//   }

//   // static assets: css and images
//   if (pathname === "/style.css") {
//     return serveFile(res, "style.css", 200);
//   }
//   if (pathname.startsWith("/images/")) {
//     return serveFile(res, pathname.slice(1), 200);
//   }

//   try {
//     if (pathname === "/home") {
//       return serveFile(res, "home.html", 200);
//     }
//     if (pathname === "/service" || pathname === "/services") {
//       return serveFile(res, "service.html", 200);
//     }
//     if (pathname === "/about") {
//       return serveFile(res, "about.html", 200);
//     }
//     if (pathname === "/contact") {
//       return serveFile(res, "contact.html", 200);
//     }
//     if (pathname === "/pricing") {
//       return serveFile(res, "pricing.html", 200);
//     }

//     // not found -> 404
//     return serveFile(res, "404.html", 404);
//   } catch (e) {
//     // fallback in case something unexpected happens
//     console.error(e);
//     res.statusCode = 500;
//     res.setHeader("Content-Type", "text/plain; charset=utf-8");
//     return res.end("500 - Internal Server Error");
//   }
// });

// server.listen(PORT, () => {
//   console.log(`NODE server is live on http://localhost:${PORT}`);
// });









// Import basic Node modules
const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// Where your files are
const PUBLIC = path.join(__dirname, 'public');
const PORT = 3000;

// Show different files for different routes
const server = http.createServer(async (req, res) => {
  const url = req.url.replace(/\/+$/, '') || '/';

  // For each route, serve the right HTML file
  if (url === '/' || url === '/home') {
    return serveFile(res, 'home.html', 200);
  }
  if (url === '/about') {
    return serveFile(res, 'about.html', 200);
  }
  if (url === '/contact') {
    return serveFile(res, 'contact.html', 200);
  }
  if (url === '/service') {
    return serveFile(res, 'service.html', 200);
  }
  if (url === '/style.css') {
    return serveFile(res, 'style.css', 200);
  }
  // showing default page
  return serveFile(res, '404.html', 404);
});

// Helper function to serve files
async function serveFile(res, filename, status) {
  try {
    const file = await fs.readFile(path.join(PUBLIC, filename));
    let type = 'text/html';
    if (filename.endsWith('.css')) type = 'text/css';
    res.writeHead(status, {'Content-Type': type});
    res.end(file);
  } catch (err) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Error loading file.');
  }
}

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
