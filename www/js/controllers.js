angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {
    $scope.books = [
        {
            id: 1,
            book: "Sri Isopanisad",
            pages: 158
 },
        {
            id: 2,
            book: "Krishna Book",
            pages: 706
 },
        {
            id: 3,
            book: "Nectar of Devotion",
            pages: 407
 },
        {
            id: 4,
            book: "Teachings of Lord Caitanya",
            pages: 347
 },
        {
            id: 5,
            book: "Bhagavad Gita As It Is",
            pages: 868
 },
        {
            id: 6,
            book: "Srimad Bhagavatam",
            pages: 15119
 },
        {
            id: 7,
            book: "Caitanya Caritamrta",
            pages: 6621
 }
]
    $scope.months = 1;
    $scope.years = 0;

})

.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});