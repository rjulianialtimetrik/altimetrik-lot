'use strict';

const assert = require('assert');
const serialize = require('../../../../src/services/questions/hooks/serialize.js');

describe('questions serialize hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    serialize()(mockHook);

    assert.ok(mockHook.serialize);
  });
});
