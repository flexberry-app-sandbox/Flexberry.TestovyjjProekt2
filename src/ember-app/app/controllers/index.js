import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.testovyjj-proekt.caption'),
          title: i18n.t('forms.application.sitemap.testovyjj-proekt.title'),
          children: [{
            link: 'i-i-s-testovyjj-proekt-car-l',
            caption: i18n.t('forms.application.sitemap.testovyjj-proekt.i-i-s-testovyjj-proekt-car-l.caption'),
            title: i18n.t('forms.application.sitemap.testovyjj-proekt.i-i-s-testovyjj-proekt-car-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-testovyjj-proekt-brand-l',
            caption: i18n.t('forms.application.sitemap.testovyjj-proekt.i-i-s-testovyjj-proekt-brand-l.caption'),
            title: i18n.t('forms.application.sitemap.testovyjj-proekt.i-i-s-testovyjj-proekt-brand-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-testovyjj-proekt-driver-l',
            caption: i18n.t('forms.application.sitemap.testovyjj-proekt.i-i-s-testovyjj-proekt-driver-l.caption'),
            title: i18n.t('forms.application.sitemap.testovyjj-proekt.i-i-s-testovyjj-proekt-driver-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})