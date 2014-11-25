'use strict';

angular.module('azureApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sample', {
        url: '/sample',
        templateUrl: 'app/sample/sample.html',
        controller: 'SampleCtrl'
      });
  });