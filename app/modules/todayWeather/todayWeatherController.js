angular.module('app.todayWeather.controller', ['app.todayWeather.service'])
.controller('TodayWeatherController', [function() {
	this.city = '';
	this.country = '';
}]);