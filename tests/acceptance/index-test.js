import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('has intercom script attached to body', async function(assert) {
    await visit('/');

    assert.ok(document.querySelector('#ember-intercom-api'), 'intercom script in body');
  });
});
