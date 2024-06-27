import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestovyjj_proektBrandLForm from './forms/i-i-s-testovyjj-proekt-brand-l';
import IISTestovyjj_proektCarLForm from './forms/i-i-s-testovyjj-proekt-car-l';
import IISTestovyjj_proektDriverLForm from './forms/i-i-s-testovyjj-proekt-driver-l';
import IISTestovyjj_proektBrandEForm from './forms/i-i-s-testovyjj-proekt-brand-e';
import IISTestovyjj_proektCarEForm from './forms/i-i-s-testovyjj-proekt-car-e';
import IISTestovyjj_proektDriverEForm from './forms/i-i-s-testovyjj-proekt-driver-e';
import IISTestovyjj_proektBrandModel from './models/i-i-s-testovyjj-proekt-brand';
import IISTestovyjj_proektCarModel from './models/i-i-s-testovyjj-proekt-car';
import IISTestovyjj_proektDriverModel from './models/i-i-s-testovyjj-proekt-driver';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-testovyjj-proekt-brand': IISTestovyjj_proektBrandModel,
    'i-i-s-testovyjj-proekt-car': IISTestovyjj_proektCarModel,
    'i-i-s-testovyjj-proekt-driver': IISTestovyjj_proektDriverModel
  },

  'application-name': 'Testovyjj_proekt',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Testovyjj_proekt',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Testovyjj_proekt',
          title: 'Testovyjj_proekt'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'testovyjj-proekt': {
          caption: 'Testovyjj_proekt',
          title: 'Testovyjj_proekt',
          'i-i-s-testovyjj-proekt-car-l': {
            caption: 'Car',
            title: ''
          },
          'i-i-s-testovyjj-proekt-brand-l': {
            caption: 'Brand',
            title: ''
          },
          'i-i-s-testovyjj-proekt-driver-l': {
            caption: 'Driver',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-testovyjj-proekt-brand-l': IISTestovyjj_proektBrandLForm,
    'i-i-s-testovyjj-proekt-car-l': IISTestovyjj_proektCarLForm,
    'i-i-s-testovyjj-proekt-driver-l': IISTestovyjj_proektDriverLForm,
    'i-i-s-testovyjj-proekt-brand-e': IISTestovyjj_proektBrandEForm,
    'i-i-s-testovyjj-proekt-car-e': IISTestovyjj_proektCarEForm,
    'i-i-s-testovyjj-proekt-driver-e': IISTestovyjj_proektDriverEForm
  },

});

export default translations;
