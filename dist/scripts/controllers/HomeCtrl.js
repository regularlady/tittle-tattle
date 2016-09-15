(function() {
    function homeCtrl(Rooms) {
        this.all = Rooms.all;
    }

    angular
        .module('tittleTattle')
        .controller('homeCtrl', ['Rooms', homeCtrl]);
})();
