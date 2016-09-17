(function() {
    function homeCtrl (Rooms, $scope, $uibModal, $log, $firebaseArray) {

      this.all = Rooms.all

      var ref = firebase.database().ref().child("rooms");
      var rooms = $firebaseArray(ref);

      $scope.addRoom = function(){
          return rooms.$add({name: $scope.roomName});
      }

      $scope.items = ['item1', 'item2', 'item3'];
      $scope.animationsEnabled = true;
      $scope.open = function (size) {

        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html',
          controller: 'createRoomModal',
            backdrop: true,
          size: size,
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };

      $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
      };

    }

    angular
        .module('tittleTattle')
        .controller('homeCtrl',['Rooms','$scope', '$uibModal', '$log', '$firebaseArray', homeCtrl]);
})();
