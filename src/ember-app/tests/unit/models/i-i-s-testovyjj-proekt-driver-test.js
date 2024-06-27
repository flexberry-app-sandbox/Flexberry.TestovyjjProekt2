import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-testovyjj-proekt-driver', 'Unit | Model | i-i-s-testovyjj-proekt-driver', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-testovyjj-proekt-brand',
    'model:i-i-s-testovyjj-proekt-car',
    'model:i-i-s-testovyjj-proekt-driver',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
