app.controller("myProfile",function ($scope, $rootScope, $cookies, $location, $window) {
    $scope.avatar = '../images/avatar.png';
    $scope.myImage = '';
    $scope.myCroppedImage = '';
    $scope.myText = false;
    $scope.eachUser = [];
    $scope.keys;
    $rootScope.logout = true;
    $scope.myText = false;
    $scope.all_users = [];
    $scope.show_chatbox = false;
    $scope.chat_value = '';
    $rootScope.index;


    var handleFileSelect=function(evt) {
        var file = evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function($scope){
                $scope.myImage = evt.target.result;
                $scope.filebtn = true;
                var elem = angular.element(document.querySelector("#close"));
                elem.addClass("show");

            });
        };
        reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
    $rootScope.log_out = true;
    $scope.filebtn = false;
    $scope.change_pic = function () {
        $scope.avatar = '../images/avatar.png';
        $scope.filebtn = false;
        var elem = angular.element(document.querySelector("#close"));
        elem.removeClass("show");
        $scope.myText = false;
        $scope.myshow = true;
    }


    $scope.myshow = true;
    var values = JSON.parse($window.localStorage.getItem("allUsers"));
    var user = $rootScope.logged_user;


    $scope.keys = values[user];
    console.log($scope.keys);
    $scope.im = $scope.keys.image;
    $scope.previousIndex = null;
    $scope.myclick = function(index) {
        $scope.elem = angular.element(document.querySelectorAll(".userdata"));
        $scope.each = angular.element(($scope.elem[index]));



        if ($scope.previousIndex == null) {
            if (!$scope.each.hasClass("focus")) {
                $scope.each.addClass("focus");
                $scope.previousIndex = index;
                //console.log($scope.previousIndex);

            }
        } else {
            $scope.prevelem = angular.element($scope.elem[$scope.previousIndex]);
            if ( $scope.prevelem.hasClass("focus")) {
                $scope.prevelem.removeClass("focus");
                $scope.each.addClass("focus");

               // console.log($scope.previousIndex);
                $scope.previousIndex = index;
            }

        }
    }



    $scope.save_changes = function(){

        var values = JSON.parse($window.localStorage.getItem("allUsers"));
        var user = $rootScope.logged_user;
        delete values[user];
        var new_key = $scope.keys.email + $scope.keys.password;
        $scope.keys["image"] = $scope.myImage;
        //console.log(new_key);
        values[new_key] = $scope.keys;
        $window.localStorage.setItem("allUsers", JSON.stringify(values));
        $location.path("/");
    }



    $scope.mychange = function(){
        $scope.myshow = false;
    }



    $scope.show_users = function () {
        $scope.all_users = JSON.parse($window.localStorage.getItem("allUsers"));
        var user_each = $rootScope.logged_user;
        delete $scope.all_users[user_each];
        $scope.new_key = $scope.all_users;
        //console.log($scope.new_key);
        //console.log( $scope.all_users);

    }


    $scope.open_chatbox = function(index){
        $scope.show_chatbox = true;
        $rootScope.index = index;
        //console.log($rootScope.index);
    }


    $scope.send_message = function(){
        var x = JSON.parse($window.localStorage.getItem("allUsers"));
        var to_user = [];
        $scope.chat_value = angular.element(document.querySelector("#chat_box")).val();
        //console.log($scope.chat_value);
        $scope.show_chatbox = false;
        angular.forEach($scope.new_key, function(value, key) {
            this.push(key);
        }, to_user);

        //console.log(to_user[$rootScope.index]);
        if (to_user[$rootScope.index] in x) {
            $scope.to_user = x[to_user[$rootScope.index]];
            $scope.to_user[$scope.keys.firstname] =  $scope.chat_value;
            $window.localStorage.setItem("allUsers", JSON.stringify(x));
            //console.log($scope.all_users);
        }
        console.log(x);
        $scope.chat_value = angular.element(document.querySelector("#chat_box")).val("");


    }



})



