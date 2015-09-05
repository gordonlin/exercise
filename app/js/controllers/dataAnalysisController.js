angular.module('app.dataAnalysisController', ['chart.js'])
  .config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: ['#FF5252', '#FF8A80'],
      responsive: true
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });
  }])
  .controller('DataAnalysisController', ['$scope', function ($scope) {
    $scope.labels = ["2007","2008","2009","2010","2011","2012","2013"];
    $scope.series = ['Male', 'Female'];
    $scope.data = [
      [106898, 103937, 99492 , 87213, 101943, 118848, 103120],
      [97516, 94796, 91818, 79673, 94684, 110633, 95993]
    ];    
  }]);