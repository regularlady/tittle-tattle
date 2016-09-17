(function() {
    function Rooms($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        // rooms.$add({name: 'newRoom'});

        var create = function (){
            console.log("create function in Rooms.js")
        };
        
        return {
            all: rooms
        };
    }

    angular
        .module('tittleTattle')
        .factory('Rooms', ['$firebaseArray', Rooms]);
})();
