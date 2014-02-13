require(["/example/tests/test/unit/test.config.js"], function () {
    console.log("test config file found");
  require(["test-setup", "chai", "sinon", "text", "chaiAsPromised", "chaiJquery", "/example/static/js/app/app.config.js"],
    function (setup, chai, sinon, text, chaiAsPromised, chaiJquery) {
      window.initApp = setup.initApp;
      window.setupApp = setup.setupApp;
      window.bootstrapApp = setup.bootstrapApp;
      chai.Assertion.includeStack = true
      assert = chai.assert;
      should = chai.should;
      expect = chai.expect;
      chai.should();
      chai.use(chaiAsPromised);
      chai.use(chaiJquery);
      console.log("Ready");

      require.config(
      {
        deps: tests,
        callback: window.__karma__.start,
      });

  });
});
