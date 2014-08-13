'use strict';

angular.module('icDooApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.thing.name === '') {
        return;
      }

      $http.post('/api/things', $scope.thing);

      /*

      $http.post('/api/things', {
        name: $scope.thing.name,
        info: $scope.thing.info
      });

      */
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });