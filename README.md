# ember-intercom-api

This addon simple inject Intercom.io's script at runtime and gives you a nice interface for interaction with the script via `intercom` service.

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
This way you can set testing appId for you `development` or `staging` environment:

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

## Tests

You would rather like to avoid injecting Intercom's script to your Acceptance Tests and send the data.
 
This could be done but just not adding `ember-intercom-api` options to `ENV` variable:

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

