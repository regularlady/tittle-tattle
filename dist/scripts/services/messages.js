(function() {
  function Messages($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
        addMessage: function(roomId, currentMessage){
            return messages.$add({
              username: $cookies.get('tittleTattleCurrentUser'),
              content: currentMessage,
              sentAt: Date.now(),
              roomId: roomId
          })
        },
        getMessages: function(roomId) {
          var messagesById =  $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
          return messagesById;
        }
    };
  }

  angular
    .module('tittleTattle')
    .factory('Messages', ['$firebaseArray', '$cookies', Messages]);
})();
