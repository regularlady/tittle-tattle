(function() {
    function homeCtrl (Rooms, $scope, $uibModal, $log, $firebaseArray) {

      this.all = Rooms.all
      var roomsArray = Rooms.all

      var ref = firebase.database().ref().child("rooms");
      var rooms = $firebaseArray(ref);

      $scope.active = "";

      $scope.addRoom = function(){
        Rooms.create({name: $scope.roomName});
      }

      $scope.addMessage = function(){
        Rooms.addMessage($scope.active, $scope.currentMessage);
        $scope.currentMessage = '';
      }

      $scope.setActive = function(){
        $scope.active = this.room.$id;
        $scope.currentRoom = this.room.name;
        $scope.messages = Rooms.getMessages($scope.active);
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
