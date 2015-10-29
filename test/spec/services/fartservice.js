'use strict';

describe('Service: fartService', function () {

  // load the service's module
  beforeEach(module('firefartApp'));

  // instantiate service
  var fartService;
  beforeEach(inject(function (_fartService_) {
    fartService = _fartService_;
  }));

  it('should do something', function () {
    expect(!!fartService).toBe(true);
  });

});
