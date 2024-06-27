import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-testovyjj-proekt-brand-l');
  this.route('i-i-s-testovyjj-proekt-brand-e',
  { path: 'i-i-s-testovyjj-proekt-brand-e/:id' });
  this.route('i-i-s-testovyjj-proekt-brand-e.new',
  { path: 'i-i-s-testovyjj-proekt-brand-e/new' });
  this.route('i-i-s-testovyjj-proekt-car-l');
  this.route('i-i-s-testovyjj-proekt-car-e',
  { path: 'i-i-s-testovyjj-proekt-car-e/:id' });
  this.route('i-i-s-testovyjj-proekt-car-e.new',
  { path: 'i-i-s-testovyjj-proekt-car-e/new' });
  this.route('i-i-s-testovyjj-proekt-driver-l');
  this.route('i-i-s-testovyjj-proekt-driver-e',
  { path: 'i-i-s-testovyjj-proekt-driver-e/:id' });
  this.route('i-i-s-testovyjj-proekt-driver-e.new',
  { path: 'i-i-s-testovyjj-proekt-driver-e/new' });
});

export default Router;
