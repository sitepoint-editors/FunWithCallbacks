var pipeDelimiter = require('../pipeDelimiter');
var describe = require('mocha/lib/mocha.js').describe;
var it = require('mocha/lib/mocha.js').it;
var assert = require('chai').assert;

describe('A pipe delimiter', function () {
  it('does not add pipe with an empty list', function () {
    var list = pipeDelimiter('', 'Cat');

    assert.equal(list, 'Cat');
  });

  it('adds a pipe in the list', function () {
    var list = pipeDelimiter('Cat', 'Cat');

    assert.equal(list, 'Cat|Cat');
  });
});
