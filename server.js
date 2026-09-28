const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");

const port = Number(process.env.PORT || 3000);
const root = __dirname;
const players = new Map();
let winner = null;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

function sendJson(response, status, data) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(data));
}

function cleanName(name) {
  return String(name || "Gast")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 24) || "Gast";
}

function readBody(request) {
  return new Promise((resolve) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 2048) request.destroy();
    });
    request.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        resolve({});
      }
    });
  });
}

function publicState() {
  return {
    winner,
    playersCount: players.size
  };
}

function localAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];

  for (const entries of Object.values(interfaces)) {
    for (const entry of entries || []) {
      if (entry.family === "IPv4" && !entry.internal) {
        addresses.push(entry.address);
      }
    }
  }

  return addresses;
}

async function handleApi(request, response) {
  if (request.url === "/api/state" && request.method === "GET") {
    sendJson(response, 200, publicState());
    return true;
  }

  if (request.url === "/api/join" && request.method === "POST") {
    const body = await readBody(request);
    const name = cleanName(body.name);
    players.set(name, Date.now());
    sendJson(response, 200, publicState());
    return true;
  }

  if (request.url === "/api/win" && request.method === "POST") {
    const body = await readBody(request);
    const name = cleanName(body.name);
    players.set(name, Date.now());
    if (!winner) {
      winner = {
        name,
        wonAt: new Date().toISOString()
      };
    }
    sendJson(response, 200, publicState());
    return true;
  }

  if (request.url === "/api/reset" && request.method === "POST") {
    winner = null;
    players.clear();
    sendJson(response, 200, publicState());
    return true;
  }

  return false;
}

function serveFile(request, response) {
  const requestedPath = request.url === "/" ? "/index.html" : decodeURIComponent(request.url.split("?")[0]);
  const filePath = path.normalize(path.join(root, requestedPath));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(data);
  });
}

const server = http.createServer(async (request, response) => {
  if (request.url.startsWith("/api/")) {
    const handled = await handleApi(request, response);
    if (!handled) sendJson(response, 404, { error: "Not found" });
    return;
  }

  serveFile(request, response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Ich-Botschaften Arena laeuft auf http://localhost:${port}`);
  for (const address of localAddresses()) {
    console.log(`Klassen-Link: http://${address}:${port}`);
  }
});
