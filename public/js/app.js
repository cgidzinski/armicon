var myApp = angular.module('Armicon', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
    //
    $locationProvider.html5Mode(true)

    $urlMatcherFactoryProvider.strictMode(false)
        // $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('404');
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "/views/home.html"
        })
        .state('about', {
            url: "/about",
            templateUrl: "views/about.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "views/contact.html"
        })
        .state('misc', {
            url: "/misc",
            templateUrl: "views/misc.html"
        })
        .state('yup', {
            url: "/yup",
            templateUrl: "views/yup.html"
        })
        .state('404', {
            url: "/404",
            templateUrl: 'views/404.html'
        });
});

myApp.controller('IndexController', function($scope,$location) {
    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
  $scope.pageTitle="Ideas Born in Darkness"
  $scope.menuItems = [
                   {"name":"Home","icon":"fa-gear", "route":"/"},
                   {"name":"404","icon":"fa-envelope", "route":"/404"},
                   {"name":"Home","icon":"fa-gear", "route":"/404"}];
});