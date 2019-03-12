const assert = require('chai').assert;
const componentsData = require('../../data/componentsData');

var components = {
  componentTitle: componentsData.title,
  headerTitle: componentsData.header.headerTitle,
  headerDescription: componentsData.header.headerDescription
}

var alert = {
  title: componentsData.components.alerts.title,
  show: componentsData.components.alerts.show,
  status: componentsData.components.alerts.status
}

// Components main description
describe('Components describing componentsData.json', function() {
  describe('Components title', function() {
    it('Components title should return Style Guide | Components', function() {
      assert.equal(components.componentTitle, 'Style Guide | Components');
    });
  });

  describe('Components header title', function() {
    it('Components header title should return a type of string', function() {
      assert.typeOf(components.headerTitle, 'string');
    });
    it('Components header title should not be null', function() {
      assert.notEqual(components.headerTitle, null);
    });
    it('Components header title should be at least 1 in length and less than 15', function() {
      assert.isTrue(components.headerTitle.length >= 1 && components.headerTitle.length < 15);
    });
  });

  describe('Components header description', function() {
    it('Components header description should be at least 1 in length', function() {
      assert.isTrue(components.headerDescription.length >= 1 && components.headerDescription.length < 500);
    });
  });

});


// Alert component
describe('Alert Description', function() {
  describe('Alerts title', function() {
    it('Alerts title should return alerts', function() {
      assert.equal(alert.title, 'alerts');
    });
  });

  describe('Alerts show', function() {
    it('Alerts show should return true or false', function() {
      assert.equal(alert.show, true || false);
    });
  });

  describe('Alerts status', function() {
    it('Alerts status should return Ready to use, Not ready or something else', function() {
      assert.equal(alert.status, 'Ready to use');
    });
  });
});