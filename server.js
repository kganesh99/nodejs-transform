const express = require('express');
//const readCSV = require('./app/read-data-from-csv');
//const formatData = require('./app/format-csv-data');
const app = express();
//app.set('view engine', 'pug');
const displayRoutes = require('./api/routes/display');
app.set('json spaces', 4);
app.use('/display', displayRoutes);
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'
// app.get('/', function(req, res) {
//   res.render('index', { title: 'Hey', message: 'Hello there!' });
// }); //res.send('Hello World!'));

// app.set('json spaces', 40);
// // app.all('/output', async (req, res) => {
// //   // console.log('hello...');
// //   //const output = await formatData();
// //   //console.log(output);
// //   //var obj = JSON.stringify(output['data_1'], undefined, 2);
// //   //console.log(obj);
// //   //------------------------
// //   var obj = { name: 'thara', husname: 'ganesh' };
// //   // var sobj = JSON.stringify(obj, undefined, 2);
// //   const formatOutput = formatData(output);
// //   // console.log('Format Output', formatOutput);
// //   // res.render('index', {
// //   //   title: 'Hey',
// //   //   message: 'Hello there!',
// //   //   obj: sobj
// //   // });
// //   res.json(formatOutput);
// //   next();
// // });
// var output = {};
// var r1 = express.Router();
// r1.get('/output', function(req, res, next) {
//   output = readCSV();
//   console.log('output', output);
//   req.body = JSON.stringify(output, undefined, 2);
//   next();
// });

// var r2 = express.Router();
// r2.get('/output', function(req, res, next) {
//   const formatOutput = formatData(output);
//   console.log('Formatoutput', formatOutput);
//   res.json(JSON.stringify(formatOutput, undefined, 2));
//   next();
// });

// app.use(r1, r2);

// Router
// app.use(r1);
// app.get('/output', function(req, res) {
//   console.log('response', req.body);
//   var responseText = 'Output<br>';
//   responseText += '<pre>Requested at: ' + req.body + '</pre>';
//   //const json = JSON.parse(req.body);
//   res.send(responseText);
//   //res.send('Hello World!');
// });

// app.get('/viewoutput', require('./app/format-csv-data'));

// var myLogger = function(req, res, next) {
//   console.log('LOGGED');
//   const output = readCSV();
//   //const formatOutput = await formatData(output);
//   //console.log('Formatoutput', formatOutput);
//   var obj = { name: 'thara', husname: 'ganesh' };
//   console.log('Output from INdex.js', output);
//   var sobj = JSON.stringify(output, undefined, 2);
//   req.body = output;
//   next();
// };

//app.use(myLogger);

// app.get('/hello', function(req, res) {
//   console.log('response', req.body);
//   var responseText = 'Hello World!<br>';
//   responseText += '<pre>Requested at: ' + req.body + '</pre>';
//   //const json = JSON.parse(req.body);
//   res.send(responseText);
//   //res.send('Hello World!');
// });

// console.log(output);

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);
module.exports = app;
