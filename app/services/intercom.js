import Ember from 'ember';
import config from '../config/environment';

const { Service, computed, isPresent } = Ember;

export default Service.extend({
  boot(params = {}) {
    params['app_id'] = this.get('config').appId;

    this.intercomApi()('boot', params);
  },

  config: computed(function () {
    return config['ember-intercom-api'] || {};
  }),

  emptyFn() {},

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
