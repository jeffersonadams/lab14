var app = angular.module('myModule');

app.config(function($routeProvider) {
  $routeProvider
  .when('/cat', {
    controller: 'routeCtrl',
    templateUrl: 'cat.html'
  })
  .when('/dog', {
    controller: 'routeCtrl',
    templateUrl: 'dog.html'
  })
  .when('/murphy', {
    controller: 'routeCtrl',
    templateUrl: 'murphy.html'
  })
  .otherwise({
    controller: 'routeCtrl',
    templateUrl: 'home.html'
  })
  //.otherwise is generally a 404 page, i used /about just to demonstrate how it is used
  //.otherwise({redirectTo: '/about'})
})
