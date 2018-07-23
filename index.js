const http = require('http');
const app = require('./app.js');

const port = 8080;
const server = http.createServer(app);
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

server.listen(server_port, server_ip_address);
