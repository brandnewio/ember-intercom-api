import Ember from 'ember';
import config from '../config/environment';

const { Service, computed, K, isPresent } = Ember;

export default Service.extend({
  config: computed(function () {
    return config['ember-intercom-api'] || {};
  }),

  intercomApi() {
    if (isPresent(window.Intercom)) {
      return window.Intercom;
    } else {
      return K;
    }
  },

  boot(params = {}) {
    params['app_id'] = this.get('config').appId;

    this.intercomApi()('boot', params);
  },

  update(params) {
    this.intercomApi()('update', params);
  },

  shutdown() {
    this.intercomApi()('shutdown');
  },

  hide() {
    this.intercomApi()('hide');
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

  trackEvent(eventName, params) {
    this.intercomApi()('trackEvent', eventName, params);
  }
});
