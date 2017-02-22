app.controller("myModal",function ($scope) {

        $scope.mystyle=
            {
                display:'none'
            }
        $scope.image = '../images/img3.png';
        $scope.open = function () {
            $scope.mystyle.display = $scope.mystyle.display == "none" ? "block" : "none";
        }

    })
