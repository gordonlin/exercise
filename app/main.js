require.config({
    paths: {
        jquery: '//code.jquery.com/jquery-1.11.3.min',
        director: '../bower_components/director/build/director.min',
        chart: '../bower_components/Chart.js/Chart.min',
        todayWeatherCtrl: 'modules/todayWeather/todayWeatherController',
        weatherService: 'modules/todayWeather/weatherService',
        dataAnalysisCtrl: 'modules/dataAnalysis/dataAnalysisController'
    }
});

require([
    'app'
], function(app) {
    app.init();
});