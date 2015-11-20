angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $ionicPopup) {
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
];

    $scope.allMonths = [];
    for (var i = 0; i < 13; i++) {
        $scope.allMonths.push(i);
    };
    $scope.allYears = [];
    for (var i = 0; i < 11; i++) {
        $scope.allYears.push(i);
    };

    //initialize variables
    $scope.book = $scope.books[0];
    $scope.month = 1;
    $scope.year = 0;

    //make sure that book pages per day always returns at least 1
    $scope.formatPages = function (book, year, month) {
        var intYear = parseInt(year);
        var intMonth = parseInt(month);

        return Math.ceil(book.pages / (month * 30 + year * 365));
    }

    $scope.groups = [
        {
            name: '',
            id: 1,
            items: [{

                subName: 'SubBubbles1',
                subId: '1-1'

            }]
        }];

    $scope.selectBook = function (book, group) {
            $scope.book = book;
            $scope.toggleGroup(group);
        }
        /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
    $scope.toggleGroup = function (group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };
    $scope.isGroupShown = function (group) {
        return $scope.shownGroup === group;
    };


    $scope.addMonth = function () {
        $scope.month = $scope.month + 1;
    }

    $scope.subtractMonth = function () {
        if ($scope.month <= 0) {
            var alertPopup = $ionicPopup.alert({
                title: 'Invalid',
                template: 'Month cannot be negative!'
            });
        } else {
            $scope.month = $scope.month - 1;
        }
    }

    $scope.addYear = function () {
        $scope.year = $scope.year + 1;
    }

    $scope.subtractYear = function () {
        if ($scope.year <= 0) {
            var alertPopup = $ionicPopup.alert({
                title: 'Invalid',
                template: 'Year cannot be negative!'
            });
        } else {
            $scope.year = $scope.year - 1;
        }
    }


})

.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.datepickerObject = {
        titleLabel: 'Calendar', //Optional
        todayLabel: 'Today', //Optional
        closeLabel: 'Close', //Optional
        setLabel: 'Set', //Optional
        setButtonType: 'button-balanced', //Optional
        todayButtonType: 'button-stable', //Optional
        closeButtonType: 'button-assertive', //Optional
        inputDate: new Date(), //Optional
        mondayFirst: true, //Optional
        //                disabledDates: disabledDates, //Optional
        //                weekDaysList: weekDaysList, //Optional
        //                monthList: monthList, //Optional
        templateType: 'popup', //Optional
        showTodayButton: 'true', //Optional
        modalHeaderColor: 'bar-positive', //Optional
        modalFooterColor: 'bar-positive', //Optional
        from: new Date(2012, 8, 2), //Optional
        to: new Date(2018, 8, 25), //Optional
        callback: function (val) { //Mandatory
            datePickerCallback(val);
        },
        dateFormat: 'MM-dd-yyyy', //Optional
        closeOnSelect: true, //Optional
    };

    var datePickerCallback = function (val) {
        $scope.datepickerObject.inputDate = val;
        if (typeof (val) === 'undefined') {
            $scope.datepickerObject.inputDate = new Date();
            console.log('No date selected. Defaulting to today\'s date');
        } else {
            console.log('Selected date is : ', val)
        }
    };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope, $ionicPopup) {
    $scope.settings = {
        enableFriends: true
    };

    $scope.buttonAlert = function (social) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Share Your Progress on ' + social + "!",
            template: 'I read my pages today.'
        });
    }

});