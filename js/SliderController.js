app.controller("mySider", function ($scope, $interval) {
    $scope.images = ["slide1.jpg", "slide2.png", "slide3.png"];
    $scope.x = $scope.images[0];
    $scope.index = 0;
    $scope.forward = function () {
        $scope.x =  $scope.images[++$scope.index];
        if($scope.index == 3){
            $scope.index = 0;
            $scope.x = $scope.images[0];
        }
    }

    $scope.backward = function(){
        if($scope.index < 3 && $scope.index != 0 ){
            $scope.x =  $scope.images[--$scope.index];
        }else{
            $scope.x = $scope.images[0];
            $scope.index = 0;
        }
    }

    $scope.init = function () {
        $interval(function () {
            $scope.x =  $scope.images[++$scope.index];
            if($scope.index == 3){
                $scope.index = 0;
                $scope.x = $scope.images[0];
            }
        }, 2000);
    }



    $scope.mystyle=
        {
            display:'none'
        }
    $scope.zoom = function () {
        $scope.mystyle.display = $scope.mystyle.display == "none" ? "block" : "none";
        $scope.t = $scope.x;

    }

    $scope.close = function () {
        $scope.mystyle.display = $scope.mystyle.display == "none" ? "block" : "none";
        $scope.x = $scope.images[$scope.images.indexOf($scope.t)];
    }
})

