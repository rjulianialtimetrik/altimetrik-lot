'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('quizes service', function() {
  it('registered the quizes service', () => {
    assert.ok(app.service('quizes'));
  });
});
