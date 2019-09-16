const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const UsersRouter = require('./users/usersRouter.js');  //This should route to whatever Route you are setting

const server = express();

server.use(cors())
server.use(helmet())
server.use(express.json());
server.use('/api/users', UsersRouter);

module.exports = server;