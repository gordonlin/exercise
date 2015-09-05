angular.module('app.todayWeather.controller', ['app.todayWeather.service'])
	.controller('TodayWeatherController', [
		'WeatherService',
		'$scope',
		function (weatherService, $scope) {
			$scope.weather = {};
			$scope.isLoaded = false;
			$scope.isLoading = false;
			$scope.city = 'taipei';
			$scope.country = 'tw';
			$scope.imgType = "";
			
			$scope.search = function () {
				$scope.isLoading = true;
				$scope.isLoaded = false;
				weatherService.search($scope.city, $scope.country).success(function (data) {
					$scope.weather = data;
					$scope.isLoaded = true;
					if(data.description.indexOf('cloud') !== -1) {
						$scope.imgType="cloud";
					} else if(data.description.indexOf('rain') !== -1) {
						$scope.imgType="rain";
					} else if(data.description.indexOf('clear') !== -1) {
						$scope.imgType="clear";
					} else {
						$scope.imgType="unknown";
					}
				}).error(function(message) {
					$scope.isLoaded = false;
				}).finally(function() {
					$scope.isLoading = false;
				});
			}
		}]);