var app = angular.module('app', [
	'ui.router'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('dataAnalysis', {
			url: '/dataAnalysis',
			templateUrl: 'template/dataAnalysis.html'
		})
		.state('todayWeather', {
			url: '/todayWeather',
			templateUrl: 'template/todayWeather.html'
		})
});