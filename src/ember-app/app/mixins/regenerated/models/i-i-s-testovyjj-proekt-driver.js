import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  age: DS.attr('number'),
  name: DS.attr('string')
});

export let ValidationRules = {
  age: {
    descriptionKey: 'models.i-i-s-testovyjj-proekt-driver.validations.age.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-testovyjj-proekt-driver.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('DriverE', 'i-i-s-testovyjj-proekt-driver', {
    name: attr('Name', { index: 0 }),
    age: attr('Age', { index: 1 })
  });

  modelClass.defineProjection('DriverL', 'i-i-s-testovyjj-proekt-driver', {
    name: attr('Name', { index: 0 }),
    age: attr('Age', { index: 1 })
  });
};
