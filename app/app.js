define([
  'jquery',
  'director',
  'todayWeatherCtrl'
], function (
  $,
  director,
  todayWeatherCtrl
  ) {
    var app = {
      init: function () {
        $.support.cors = true;
        var router = new Router({
          '/todayWeather': function() {todayWeatherCtrl.init();}
        });
        router.init();
      }
    };
    return app;
  });
