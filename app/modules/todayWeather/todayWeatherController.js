angular.module('app.todayWeather.controller', ['app.todayWeather.service'])
	.controller('TodayWeatherController', [
		'WeatherService',
		'$scope',
		function (weatherService, $scope) {
			$scope.weather = {};
			$scope.city = 'taipei';
			$scope.country = 'tw';
			$scope.search = function () {
				weatherService.search($scope.city, $scope.country).success(function (data) {
					$scope.weather = data;
					console.log(data);
				}).error(function(message) {
					console.log(message);
				});
			}
		}]);