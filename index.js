// const fs = require('node:fs');

// console.log('first');
// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);

// console.log('second');
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });

// console.log('third');

// fs.writeFileSync("./greet.txt", "Hello world!");

// fs.writeFile("./greet.txt", " Hello Danni2!", {flag: "a"}, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File written");
//     }
// });

// const fs = require('node:fs');
// const zlib = require("node:zlib");

// console.log("first");

// fs.readFile("file.txt", "utf-8")
//     .then(data => console.log(data))
//     .catch((error) => console.log(error));

// console.log("second");

// async function readFile() {
//     try {
//         const data = await fs.readFile("file.txt", "utf-8");
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// readFile();

// const gzip = zlib.createGzip();

// const readableStream = fs.createReadStream("./file.txt", {
//     encoding: "utf-8",
//     highWaterMark: 2,
// });

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

// const writeableStream = fs.createWriteStream("./file2.txt");

// readableStream.pipe(writeableStream);

// readableStream.on("data", (chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk);
// });

// const http = require("node:http");
// const fs = require('node:fs');

// const server = http.createServer((req, res) => {
//     // const superHero = {
//     //     firstName: "Bruce",
//     //     lastName: "Wayner",
//     // };

//     // const name = "Danni";
//     // res.writeHead(200, {"Content-Type": "text/html"});
//     // // fs.createReadStream(__dirname + "/index.html").pipe(res);
//     // let html = fs.readFileSync("./index.html", "utf-8");
//     // html = html.replace("{{name}}", name);
//     // res.end(html);
//     // res.end(req.url);

//     if (req.url === "/") {
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.end("Home page");
//     } else if (req.url === "/about") {
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.end("About page");
//     } else if (req.url === "/api") {
//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify({
//             firstName: "Bruce",
//             lastName: "Wayne"
//         }));
//     } else {
//         res.writeHead(404);
//         res.end("page not found");
//     }
// });

// server.listen(3000, () => {
//     console.log("server running on port 3000");
// });

// console.log("First");

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//     console.log("File contents");
// });

// console.log("last");

// const crypto = require("node:crypto");
// const https = require("node:https");

// const start = Date.now();
// // crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// // crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// // crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// // console.log("Hash: ", Date.now() - start);

// // process.env.UV_THREADPOOL_SIZE = 6;
// const MAX_CALLS = 12;
// for (let i = 0; i < MAX_CALLS; i++) {
//     // crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//     //     console.log(`Hash: ${i + 1}`, Date.now() - start);
//     // });
//     https
//         .request("https://www.google.com", (res) => {
//             res.on("data", () => {});
//             res.on("end", () => {
//                 console.log(`Request: ${i + 1}`, Date.now() - start);
//             });
//         })
//         .end();
// }

// console.log('Console.log 1');
// process.nextTick(() => console.log("this is process.next 1"));
// console.log('Console.log 2');

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));

// setTimeout(() => console.log("this is setTimeout 1"), 1000);
// setTimeout(() => console.log("this is setTimeout 2"), 500);
// setTimeout(() => console.log("this is setTimeout 3"), 0);

const fs = require("fs");

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

fs.readFile(__filename, () => {
    console.log("this is readFile 1");
    setImmediate(() => console.log("this is setImmediate inside readFile"));
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

for (let i = 0; i < 2000000000; i++) {}

