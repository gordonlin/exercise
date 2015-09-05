angular.module('app.todayWeather.service', [])
.service('WeatherService', ['$http', function($http) {
	this.getTodayWeather = function(city, country) {
		return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&units=metric');
	}
}]);