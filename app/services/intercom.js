import Service from '@ember/service';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import config from '../config/environment';

export default Service.extend({
  boot(params = {}) {
    params['app_id'] = this.get('config').appId;

    this.intercomApi()('boot', params);
  },

  config: computed(function () {
    return config['ember-intercom-api'] || {};
  }),

  emptyFn() {},

  getVisitorId() {
    this.intercomApi()('getVisitorId');
  },

  hide() {
    this.intercomApi()('hide');
  },

  intercomApi() {
    if (isPresent(window.Intercom)) {
      return window.Intercom;
    } else {
      return this.emptyFn;
    }
  },

  show() {
    this.intercomApi()('show');
  },

  showMessages() {
    this.intercomApi()('showMessages');
  },

  showNewMessage(text) {
    if (text) {
      this.intercomApi()('showNewMessage', text);
    } else {
      this.intercomApi()('showNewMessage');
    }
  },

  shutdown() {
    this.intercomApi()('shutdown');
  },

  trackEvent(eventName, params) {
    this.intercomApi()('trackEvent', eventName, params);
  },

  update(params) {
    this.intercomApi()('update', params);
  }
});
