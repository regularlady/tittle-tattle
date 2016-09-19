(function() {
  function tittleTattleCookies($cookies, $uibModal) {
    $cookies.remove('tittleTattleCurrentUser')

    var currentUser = $cookies.get('tittleTattleCurrentUser');

    if (!currentUser || currentUser === '') {
         var openUsernameModal = function (size) {
            var modalInstance = $uibModal.open({
              templateUrl: 'usernameModal.html',
              controller: 'createUsername',
              backdrop: true,
              keyboard: false,
              backdrop: 'static',
              size: size
            });
          };
        openUsernameModal(400);
    }
  }

  angular
    .module('tittleTattle')
    .run(['$cookies', '$uibModal', tittleTattleCookies]);
})();

(function () {
    function createUsername($scope, $uibModalInstance, $cookies) {

          $scope.setUsername = function(){

              if ($scope.theUsername == null){
                  alert('Excuse me, please try an actual name')

              } else {
                  $cookies.put('tittleTattleCurrentUser', $scope.theUsername);
                  $scope.theUsername = '';
                  $uibModalInstance.close();              }
          }

      $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };

    };
    angular
        .module('tittleTattle')
        .controller('createUsername', ['$scope', '$uibModalInstance', '$cookies', createUsername]);
})();
