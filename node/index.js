const http = require("http");
const url = require("url");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  if (q.pathname === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }
  if (q.pathname === "/hello") {
    const name = q.query.name || "world";
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello, ${name}!`);
    return;
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Mini Node.js project - endpoints: /hello?name=, /health");
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
