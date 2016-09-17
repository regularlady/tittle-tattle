(function () {
    function createRoomModal($scope, $uibModalInstance, items) {

      $scope.items = items;
      $scope.selected = {
        item: $scope.items[0]
      };

      $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };

    };
    angular
        .module('tittleTattle')
        .controller('createRoomModal', ['$scope', '$uibModalInstance', 'items', createRoomModal]);
})();
