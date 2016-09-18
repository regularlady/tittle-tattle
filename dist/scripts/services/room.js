(function() {
    function Rooms($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var messagesRef = firebase.database().ref().child('messages');
        var messages = $firebaseArray(messagesRef);

        return {
            all: rooms,

            create: function(newRoom) {
                return rooms.$add(newRoom);
            },

            addMessage: function(roomId, currentMessage){
                return messages.$add({
                  username: "britt",
                  content: currentMessage,
                  sentAt: Date.now(),
                  roomId: roomId
              })
            },
            getMessages: function(roomId) {
              var messagesById =  $firebaseArray(messagesRef.orderByChild("roomId").equalTo(roomId));
              return messagesById;
            }

        };
    }

    angular
        .module('tittleTattle')
        .factory('Rooms', ['$firebaseArray', Rooms]);
})();
