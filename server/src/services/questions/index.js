'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'questions.db'),
    autoload: true
  });

  let questionsServiceConfig = {
    Model: db
  };

  // Initialize our service with any options it requires
  app.use('/questions', service(questionsServiceConfig));

  // Get our initialize service to that we can bind hooks
  const questionsService = app.service('/questions');

  // Set up our before hooks
  questionsService.before(hooks.before);

  // Set up our after hooks
  questionsService.after(hooks.after);

};
