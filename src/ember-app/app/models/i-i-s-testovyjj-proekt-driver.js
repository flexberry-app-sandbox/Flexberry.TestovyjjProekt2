import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as DriverMixin
} from '../mixins/regenerated/models/i-i-s-testovyjj-proekt-driver';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(DriverMixin, Validations, {
});

defineProjections(Model);

export default Model;
