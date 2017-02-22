app.controller("myLogin",function ($scope, $location, $rootScope, $window, $cookies) {
    $rootScope.logout = false;
    $rootScope.log_out = false;
    var logged_user;


    $scope.addNewUser = function (userDetails, isvalid) {
        if (isvalid) {
            $scope.message = userDetails.email + " " + userDetails.password;
        }
        else {
            $scope.message = "Error";
            $scope.showError = true;
        }

        var value = userDetails.email + userDetails.password;
        $rootScope.logged_user = value;
        var users = JSON.parse($window.localStorage.getItem("allUsers"));

        if (value in users) {
            $rootScope.logout = true;
            $rootScope.log_out = true;
            $cookies.put("user_key", value);
            //console.log($cookies.get("user_key"));
            $location.path("/table");

        }
        else{
            $scope.message = "There is no such user";
            scope.showError = false;
            userDetails.email = "";
            userDetails.password = "";



        }

    }

    $scope.getError = function (error) {
        if (angular.isDefined(error)) {
            if (error.required) {
                return "The field can not be empty";
            }
        }
    }

})

