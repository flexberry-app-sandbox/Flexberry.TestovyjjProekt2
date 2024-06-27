import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Testovyjj_proekt',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Testovyjj_proekt',
          title: 'Testovyjj_proekt'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
