angular.module('starter.controllers', [])
.controller('BuyTicketsCtrl', function($scope, $ionicPopup, TicketService) {
    $scope.confirmBuyTicket = function(confirmationCallback) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Buying ticket',
            subTitle:'Each purchase will charge the indicated amount',
            template: 'Are you sure you want to buy a ticket now?'
        });

        confirmPopup.then(function(res) {
            if (res) {
                confirmationCallback();
            } else {
                //don't do anything
            }
        });
    };
    $scope.buyTicket = function(type) {
      $scope.confirmBuyTicket(
        function(){
          TicketService.buy(type);
        }
      );
    }
})
    .controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});