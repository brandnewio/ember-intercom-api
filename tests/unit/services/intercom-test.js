import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import ENV from '../../../config/environment';

moduleFor('service:intercom', 'Unit | Service | intercom', {
  beforeEach() {
    window.Intercom = () => {};
  }
});

test('@ boot - calls boot method', function(assert) {
  const stub = this.stub(window, 'Intercom');
  const service = this.subject();

  let appId = ENV['ember-intercom-api'].appId;

  service.boot();

  assert.ok(stub.calledWithExactly('boot', { app_id: appId }), 'boot was called on Intercom');
});

test('@ config - loads config from environment', function(assert) {
  const service = this.subject();
  let config = service.get('config');

  assert.equal(config, ENV['ember-intercom-api'], 'config from environment');
});

test('@ hide - calls hide method', function(assert) {
  const stub = this.stub(window, 'Intercom');
  const service = this.subject();

  service.hide();

  assert.ok(stub.calledWithExactly('hide'), 'hide was called on Intercom');
});

test('@ intercomApi - returns empty function when there is no Intercom in global window object', function(assert) {
  window.Intercom = undefined;
  const service = this.subject();

  let emptyFn = service.intercomApi();

  assert.equal(emptyFn, service.emptyFn, 'emptyFn was returned');
});

test('@ intercomApi - returns Intercom function when there is Intercom in global window object', function(assert) {
  const service = this.subject();

  let IntercomFn = service.intercomApi();

  assert.equal(IntercomFn, window.Intercom, 'Intercom function was returned');
});

test('@ show - calls show method', function(assert) {
  const stub = this.stub(window, 'Intercom');
  const service = this.subject();

  service.show();

  assert.ok(stub.calledWithExactly('show'), 'show was called on Intercom');
});

test('@ showMessages - calls showMessages method', function(assert) {
  const stub = this.stub(window, 'Intercom');
  const service = this.subject();

  service.showMessages();

  assert.ok(stub.calledWithExactly('showMessages'), 'showMessages was called on Intercom');
});

test('@ showNewMessage - calls showNewMessage method with text if passed', function(assert) {
  const stub = this.stub(window, 'Intercom');
  const service = this.subject();
  let textMock = 'Lorem ipsum dolor';

  service.showNewMessage(textMock);

  assert.ok(stub.calledWithExactly('showNewMessage', textMock), 'showNewMessage was called on Intercom');
});

test('@ showNewMessage - calls showNewMessage method without text if not passed', function(assert) {
  const stub = this.stub(window, 'Intercom');
  const service = this.subject();

  service.showNewMessage();

  assert.ok(stub.calledWithExactly('showNewMessage'), 'showNewMessage was called on Intercom');
});

test('@ shutdown - calls shutdown method', function(assert) {
  const stub = this.stub(window, 'Intercom');
  const service = this.subject();

  service.shutdown();

  assert.ok(stub.calledWithExactly('shutdown'), 'shutdown was called on Intercom');
});

test('@ trackEvent - calls trackEvent method', function(assert) {
  const stub = this.stub(window, 'Intercom');
  const service = this.subject();
  let eventNameMock = 'Some event name';
  let paramsMock = { key: 'value' };

  service.trackEvent(eventNameMock, paramsMock);

  assert.ok(stub.calledWithExactly('trackEvent', eventNameMock, paramsMock), 'trackEvent was called on Intercom');
});

test('@ update - calls update method', function(assert) {
  const stub = this.stub(window, 'Intercom');
  const service = this.subject();
  let paramsMock = { key: 'value' };

  service.update(paramsMock);

  assert.ok(stub.calledWithExactly('update', paramsMock), 'update was called on Intercom');
});
