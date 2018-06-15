[![npm version](https://badge.fury.io/js/ember-intercom-api.svg)](https://badge.fury.io/js/ember-intercom-api)
![ember-cli version](https://img.shields.io/badge/ember--cli-3.1.3-orange.svg)

# ember-intercom-api

This addon simply inject Intercom.io's script at runtime and gives you a nice interface for interaction with the script via `intercom` service.

## Installation

```bash
ember install ember-intercom-api
```

## Usage

You need to provide `appId` for Intercom's script:

```javascript
// config/environment.js

ENV['ember-intercom-api'] = {
  appId: '[YOUR_APP_ID]'
};
```

Please remember that you can make use of `environment` variable available in `config/enviroment`.
This way you can set testing `appId` for your `development` or `staging` environment:

```javascript
module.exports = function(environment) {
  var ENV = {
    //some stuff here
  };
  
  if (environment === 'staging' || environment === 'development') {
    ENV['ember-intercom-api'] = {
      appId: '[YOUR_TESTING_APP_ID]'
    };    
  }
}
```

### Using API

Example:

```javascript
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  intercom: service(),

  beforeModel() {
    this.get('intercom').boot();
  }
});
```

### Exposed API

These methods are exposed via `intercom` service and invoked on the Intercom script. Read [The Intercom JavaScript API](https://developers.intercom.com/docs/intercom-javascript) for more information.

- `.boot(intercomSettings)` - `intercomSettings` param is optional. If not given then `app_id` provided in `config/environment.js` will be used
- `.getVisitorId()`
- `.hide()`
- `.show()`
- `.showMessages()`
- `.showNewMessage(text)` - `text` param is optional
- `.shutdown()`
- `.trackEvent(eventName, params)`
- `.update(params)`

## Tests

You would rather like to avoid injecting Intercom's script to your Acceptance Tests and send the data.
 
This could be done by just not adding `ember-intercom-api` options to `ENV` variable:

```javascript
module.exports = function(environment) {
  var ENV = {
    //some stuff here
  };
  
  if (environment !== 'test') {
    ENV['ember-intercom-api'] = {
      appId: '[YOUR_APP_ID]'
    };    
  }
}
```

or even better (as a more comprehensive example):

```javascript
module.exports = function(environment) {
  var ENV = {
    //some stuff here
  };
  
  switch(environment) {
    case 'production':
      ENV['ember-intercom-api'] = {
        appId: '[YOUR_APP_ID]'
      };
      break;
       
    case 'staging':
    case 'development':
      ENV['ember-intercom-api'] = {
        appId: '[YOUR_TESTING_APP_ID]'
      }; 
      break;
    default:
      break;
  }
}
```

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
