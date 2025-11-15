const http = require('http');

const port = 4000;

const server = http.createServer((req, res) => {
  // Routing logic based on URL path
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
      <html>
        <head><title>Home</title>
        <style>
          body { font-family: Arial; background-color: #f0f8ff; }
          h1 { color: #336699;}
        </style>
        </head>
        <body>
        <nav style="margin-bottom: 20px;">
            <a href="/home" style="margin-right: 10px;">
            <button>Home</button>
            </a>
            <a href="/about" style="margin-right: 10px;">
            <button>About</button>
            </a>
            <a href="/contact">
            <button>Contact</button>
            </a>
        </nav>
          <h1>Welcome to HOME Page</h1>
          <p>This is the home route.</p>
        </body>
      </html>
    `);
    res.end();

  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
      <html>
        <head><title>About</title>
        <style>body { font-family: Arial; background-color: #fff5e1; }</style>
        </head>
        <body>
        <nav style="margin-bottom: 20px;">
            <a href="/home" style="margin-right: 10px;">
            <button>Home</button>
            </a>
            <a href="/about" style="margin-right: 10px;">
            <button>About</button>
            </a>
            <a href="/contact">
            <button>Contact</button>
            </a>
        </nav>
        <h1>ABOUT US</h1>
        <p>This is the about route.</p>
        </body>
      </html>
    `);
    res.end();

  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
      <html>
        <head><title>Contact</title>
        <style>body { font-family: Arial; background-color: #e1f7fa; }</style>
        </head>
        <body>
        <nav style="margin-bottom: 20px;">
            <a href="/home" style="margin-right: 10px;">
            <button>Home</button>
            </a>
            <a href="/about" style="margin-right: 10px;">
            <button>About</button>
            </a>
            <a href="/contact">
            <button>Contact</button>
            </a>
        </nav>
        <h1>CONTACT</h1>
        <p>This is the contact route. Email us at contact@example.com</p>
        </body>
      </html>
    `);
    res.end();

  } else {
    // 404 Not Found for other routes
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write(`
      <html>
        <head><title>404 Not Found</title></head>
        <body>
        <nav style="margin-bottom: 20px;">
            <a href="/home" style="margin-right: 10px;">
            <button>Home</button>
            </a>
            <a href="/about" style="margin-right: 10px;">
            <button>About</button>
            </a>
            <a href="/contact">
            <button>Contact</button>
            </a>
        </nav>
        <h1>404</h1><p>Page Not Found</p></body>
      </html>
    `);
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
