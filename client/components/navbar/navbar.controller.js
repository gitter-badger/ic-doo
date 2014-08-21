'use strict';

angular.module('icDooApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Features',
      'link': '/features'
    },
    {
      'title': 'Pricing',
      'link': '/pricing'
    },
    {
      'title': 'Team',
      'link': '/team'
    },
    {
      'title': 'Support',
      'link': '/support'
    }
    ];

    //$scope.isCollapsed = false;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });