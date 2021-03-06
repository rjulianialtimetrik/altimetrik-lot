'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'promises.db'),
    autoload: true
  });

  let options = {
    Model: db
  };

  // Initialize our service with any options it requires
  app.use('/promises', service(options));

  // Get our initialize service to that we can bind hooks
  const promisesService = app.service('/promises');

  // Set up our before hooks
  promisesService.before(hooks.before);

  // Set up our after hooks
  promisesService.after(hooks.after);
};
