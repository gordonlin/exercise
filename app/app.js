define([
  'jquery',
  'director',
  'todayWeatherCtrl',
  'dataAnalysisCtrl'
], function (
  $,
  director,
  todayWeatherCtrl,
  dataAnalysis
  ) {
    var app = {
      init: function () {
        $.support.cors = true;
        var contentEl = $('#content');
        var router = new Router({
          '': function() {
            contentEl.empty();
          },
          '/todayWeather': function () {
            contentEl.empty();
            $.get('modules/todayWeather/todayWeather.html').done(function (data) {
              contentEl.append(data);
              todayWeatherCtrl.init();
            });
          },
          '/dataAnalysis': function () {
            contentEl.empty();
            $.get('modules/dataAnalysis/dataAnalysis.html').done(function (data) {
              contentEl.append(data);
              dataAnalysis.init();
            });
          }
        });
        router.init();
      }
    };
    return app;
  });
