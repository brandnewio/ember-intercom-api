import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('has intercom script attached to body', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok($('#intercom-frame'), 'intercom script in body');
  });
});
