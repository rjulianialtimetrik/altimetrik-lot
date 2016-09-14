'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('promises service', function() {
  it('registered the promises service', () => {
    assert.ok(app.service('promises'));
  });
});
