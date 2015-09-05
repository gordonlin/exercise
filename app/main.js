require.config({
    paths: {
        jquery: '//code.jquery.com/jquery-1.11.3.min',
        director: '../bower_components/director/build/director.min',
        todayWeatherCtrl: 'modules/todayWeather/todayWeatherController',
        weatherService: 'modules/todayWeather/weatherService'
    }
});

require([
    'app'
], function(app) {
    app.init();
});