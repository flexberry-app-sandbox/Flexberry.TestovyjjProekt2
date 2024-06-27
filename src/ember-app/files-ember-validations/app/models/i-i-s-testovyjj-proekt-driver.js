import {
  defineNamespace,
  defineProjections,
  Model as DriverMixin
} from '../mixins/regenerated/models/i-i-s-testovyjj-proekt-driver';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(DriverMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
