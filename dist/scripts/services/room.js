(function() {
    function Rooms($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        return {
            all: rooms,

            create: function(newRoom) {
                return rooms.$add(newRoom);
            }

        };
    }

    angular
        .module('tittleTattle')
        .factory('Rooms', ['$firebaseArray', Rooms]);
})();
