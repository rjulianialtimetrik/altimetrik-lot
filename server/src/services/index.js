'use strict';
const promises = require('./promises');
const questions = require('./questions');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(questions);
  app.configure(promises);
};
