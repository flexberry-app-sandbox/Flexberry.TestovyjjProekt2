import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  maxSpeed: DS.attr('decimal'),
  name: DS.attr('string'),
  driver: DS.belongsTo('i-i-s-testovyjj-proekt-driver', { inverse: null, async: false })
});

export let ValidationRules = {
  maxSpeed: {
    descriptionKey: 'models.i-i-s-testovyjj-proekt-car.validations.maxSpeed.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-testovyjj-proekt-car.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  driver: {
    descriptionKey: 'models.i-i-s-testovyjj-proekt-car.validations.driver.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CarE', 'i-i-s-testovyjj-proekt-car', {
    name: attr('Name', { index: 0 }),
    maxSpeed: attr('Max speed', { index: 1 }),
    driver: belongsTo('i-i-s-testovyjj-proekt-driver', 'Driver', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('CarL', 'i-i-s-testovyjj-proekt-car', {
    name: attr('Name', { index: 0 }),
    maxSpeed: attr('Max speed', { index: 1 }),
    driver: belongsTo('i-i-s-testovyjj-proekt-driver', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
