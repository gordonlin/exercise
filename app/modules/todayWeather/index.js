angular.module('app.todayWeather', [
	'ui.router',
	'app.todayWeather.controller',
	'app.todayWeather.service'
])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('todayWeather', {
				url: '/todayWeather',
				templateUrl: 'modules/todayWeather/todayWeather.html',
				controller: 'TodayWeatherController'
			});
	});