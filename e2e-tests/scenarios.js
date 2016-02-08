'use strict';

describe('loci', function() {


  it('should automatically redirect to /entry when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/entry");
  });


  describe('entry', function() {

    beforeEach(function() {
      browser.get('index.html#/entry');
    });


    it('should render entry when user navigates to /entry', function() {
      expect(element.all(by.css('[ng-view] div')).first().getAttribute('class')).
        toMatch('entry-container ng-scope');
    });

  });
});
