angular.module('app.todayWeather.service', [])
	.service('WeatherService', ['$http', function ($http) {
		this.search = function (city, country) {
			var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&units=metric';
			return $http.get(url, {
				transformResponse: $http.defaults.transformResponse.concat([function (data) {
					if(data.cod && data.cod === '404') {
						throw 'location not found';
					}
					var result = {
						main: data.weather[0].main,
						description: data.weather[0].description,
						tempMax: data.main.temp_max,
						tempMin: data.main.temp_min,
						humidity: data.main.humidity
					}
					return result;
				}])
			});
		}
	}]);