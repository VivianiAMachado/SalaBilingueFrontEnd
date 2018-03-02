angular.module('app', ['ngAnimate', 'ui.bootstrap']);
angular.module('app').controller('PopoverDemoCtrl', function ($scope) {
  $scope.myData = {
    firstname: 'John',
    lastname: 'Doe',
    employer: 'Stackoverflow'
  };
});