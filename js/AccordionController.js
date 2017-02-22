 app.controller("myAccordion",function ($scope) {
        $scope.menu = ["Menu1", "Menu2", "Menu3", "Menu4"];
        $scope.submenu = ["SubMenu1", "SubMenu2","SubMenu3"];


        $scope.mystyle=
            {display: "none"};



        $scope.previousIndex = null;

        $scope.open = function (index) {
            $scope.elem = angular.element(document.querySelectorAll(".plus"));
            $scope.elem[index].classList.toggle("active");
            $scope.subelem = angular.element($scope.elem[index].parentNode.querySelector('.submenu'));

            if($scope.previousIndex == null){

                if(!$scope.subelem.hasClass("show")) {
                    $scope.previousIndex = index;
                    $scope.subelem.addClass("show");

                }

        }
        else{

                if($scope.subelem.hasClass("show")) {
                    $scope.prevElement = angular.element($scope.elem[$scope.previousIndex].parentNode.querySelector('.submenu'));
                    $scope.subelem.removeClass("show");
                    $scope.previousIndex = null;

                }else
                {
                    $scope.prevElement = angular.element($scope.elem[ $scope.previousIndex].parentNode.querySelector('.submenu'));
                    $scope.subelem.addClass("show");
                    $scope.prevElement.removeClass("show");
                    $scope.elem[$scope.previousIndex].classList.toggle("active");
                    $scope.previousIndex = index;

                }
            }
        }
    })