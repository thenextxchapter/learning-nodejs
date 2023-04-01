const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
	if (req.url == "/") {
		fs.readFileSync("../content/titles.json", (err, data) => {
			if (err) {
				console.error(err);
				res.end("Server Error");
			} else {
				const titles = JSON.parse(data.toString());
				fs.readFile("../content/template.html", (err, data) => {
					if (err) {
						console.error(err);
						res.end("Server Error");
					} else {
						const tmpl = data.toString();
						res.writeHead(200, { "Content-Type": "text/html" });
						res.end(html);
					}
				});
			}
		});
	}
}).listen(8000, '127.0.0.1');
