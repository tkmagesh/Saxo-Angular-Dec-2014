var 
	fs = require("fs"),
	http = require("http"),
	url = require("url"),
	qs = require("querystring"),
	path = require("path");

var staticResourceExtns = [".html", ".css", ".js", ".ico", ".png", ".txt", ".json"];

function isStaticResource(url){
	console.log(path.extname(url.pathname));
	console.log(url.pathname);
	return staticResourceExtns.indexOf(path.extname(url.pathname)) !== -1;
}

var server = http.createServer(function(req,res){
	req.url = req.url === "/" ? url.parse("/index.html") : url.parse(req.url);
	if (isStaticResource(req.url)){
		var resourcePath = path.join(__dirname, req.url.pathname);
		console.log(resourcePath);
		if (fs.existsSync(resourcePath)){
			var stream = fs.createReadStream(resourcePath, {enconding : "utf8"});
			stream.pipe(res);
		} else {
			res.statusCode = 404;
			res.end();
		}
	} else if (req.url.pathname === "/tasks") {
		setTimeout(function(){
			fs.createReadStream(path.join(__dirname, "tasksData.json"), {encoding : "utf8"}).pipe(res);
		},5000);
	}else {
			res.statusCode = 404;
			res.end();
	}
}).listen(8080);
console.log("Server listening on port 8080");