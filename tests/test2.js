/*global casper:false */

var BASE_URL = 'http://www.google.co.uk/';

casper.test.comment('go to homepage');

casper.start(BASE_URL, function() {

  this.test.info('Current location is ' + this.getCurrentUrl());

  this.test.assert(this.getCurrentUrl() === BASE_URL);

});

casper.run(function() {
  this.test.done();
});
