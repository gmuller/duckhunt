var express = require('express');
var url = require('url');
var http = require('http');
var webshot = require('webshot');
var fs = require("fs");
var temp = require("temp");
var app = express();

app.use(express.static(__dirname));
app.use(express.bodyParser());

app.get('/', function(req, res) {
	res.statusCode = 200;
    	res.send("OK\n");
});

app.post('/renderPDF', function(req, res) {
	console.log(req.body);
	var url = req.body.url;
	var timeout = 20000;
	if ('timeout' in req.body) { timeout = req.body.timeout; }
	console.log(url);
	console.log(timeout);
	var options = {
		paperSize: { format: 'A4', orientation: 'portrait', border: '1cm' },
		takeShotOnCallback: true,
		//phantomPath: '/usr/bin/phantomjs',
		phantomConfig: {
			'web-security': 'false'
		},
		timeout: timeout
	};

	var tempName = temp.path({suffix: '.pdf'});
    webshot(url, tempName, options, function(err) {
    	console.log("There was a an Error: " + err);
    	res.writeHead( 200, {"Content-Type": 'application/pdf'});
    	var readStream = fs.createReadStream(tempName);
    	readStream.pipe(res);

    	readStream.on('error', function(err){
  			console.log("Error with file generation");
  			console.log(err);
  			res.end();
		});

    	readStream.on('close', function() {
    		console.log("Finished file write");
    		fs.unlink(tempName);
    	})
    });
});
var port = process.argv[2];
console.log(port);
app.listen(port);
console.log('Listening on port ' + port);
