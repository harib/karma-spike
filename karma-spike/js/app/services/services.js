define(["service1", "service2"], function(service1, service2) {
      var init = function(app) {
        app.service('service1', ["$q", "$http", service1]);
        app.service('service2', ["$q", service2]);
      };
      return {init: init};
});
