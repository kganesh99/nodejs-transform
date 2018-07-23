var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
}); //res.send('Hello World!'));
app.get('/output', async (req, res) => {
  // console.log('hello...');
  //const output = await formatData();
  //console.log(output);
  //var obj = JSON.stringify(output['data_1'], undefined, 2);
  //console.log(obj);
  res.render('index', { title: 'Hey', message: 'Hello there!', obj: 'hey' });
});
// const output = readCSV();
// console.log('output', output);
// const formatOutput = formatData(output);
// console.log('Format Output', formatOutput);
//app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = app;
