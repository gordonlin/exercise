var app = angular.module('app', [
	'ui.router',
	'app.dataAnalysisController'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('dataAnalysis', {
			url: '/dataAnalysis',
			templateUrl: 'template/dataAnalysis.html',
			controller: 'DataAnalysisController'
		})
		.state('todayWeather', {
			url: '/todayWeather',
			templateUrl: 'template/todayWeather.html'
		})
});