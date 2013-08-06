var <%= _.classify(moduleName) %> = require('../module'),
  chai       = require('chai'),
  expect     = chai.expect;

describe('<%= _.classify(moduleName) %>', function() {
  it('exists', function() {
    expect(<%= _.classify(moduleName) %>).to.be.an('object');
  });
});

