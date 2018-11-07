'use strict';

// Create unique bucket name
let express = require('express'),
	bodyParser = require('body-parser');

const PORT = process.env.PORT ? process.env.PORT : 8080;

let app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

let users = {
	count : 0
}


app.get('/',(req,res) => {
	users.count ++;
	res.send( { count : users.count });
});


app.get('/user',(req,res) => {
	res.send('hello from /user');
});


app.listen(PORT, () => {
	console.log(`app listening on port ${ PORT } `);
});
