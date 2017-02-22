app.controller("myRegistr",function ($scope, $location, $window, $rootScope) {
    // $scope.reg_errors = [];
    $scope.all = {};
    $scope.kk_key;
    $scope.Registration = function () {
        $scope.reg_errors = [];

        if ($scope.firstname == null) {
            $scope.reg_errors.push("Firstname field can not be empty");
        }
        if ($scope.lastname == null) {
            $scope.reg_errors.push("Lastname field can not be empty");
        }
        if ($scope.email == null) {
            $scope.reg_errors.push("Email field can not be empty");
        }
        if ($scope.password == null) {
            $scope.reg_errors.push("Password field can not be empty");
        }

        if($scope.reg_errors.length == 0 ) {
            if (!JSON.parse($window.localStorage.getItem("allUsers"))) {
                $scope.kk_key = $scope.email + $scope.password;
                $scope.each_user = {
                    firstname: $scope.firstname,
                    lastname: $scope.lastname,
                    email: $scope.email,
                    password: $scope.password
                };

                $scope.all = {[$scope.kk_key]: $scope.each_user};
                $window.localStorage.setItem("allUsers", JSON.stringify($scope.all));
                $location.path("/");
            } else {
                $scope.kk_key = $scope.email + $scope.password;
                $scope.each_user = {
                    firstname: $scope.firstname,
                    lastname: $scope.lastname,
                    email: $scope.email,
                    password: $scope.password
                };
                var all_xx_users = JSON.parse($window.localStorage.getItem("allUsers"))
                all_xx_users[$scope.kk_key] = $scope.each_user;
                $window.localStorage.setItem("allUsers", JSON.stringify(all_xx_users));
                $location.path("/");
            }

            $scope.firstname = "";
            $scope.lastname = "";
            $scope.email = "";
            $scope.password = "";

        }
    }
})
