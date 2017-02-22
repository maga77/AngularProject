app.controller('myTable', function($scope) {
    $scope.matchingResult = [];
    $scope.dates = [];
    $scope.button = false;
    $scope.Insert = function(){

        if($scope.name){
            $scope.errorInsert = "";
            $scope.errorSearch = "";
            if($scope.dates.indexOf($scope.name) == -1){
                $scope.dates.push($scope.name);
                $scope.name = "";
            }
            else{
                $scope.errorInsert = "We have such item in a list";
                $scope.name = "";
            }

        }
        else{
            $scope.errorInsert = "";
        }
    }
    $scope.del = function(x){
        $scope.errorInsert = "";
        $scope.dates.splice(x,1);

    }

    $scope.Updete = function(x){
        $scope.button = true;
        $scope.errorInsert = "";
        $scope.name = $scope.dates[x];
        $scope.y = x;

    }

    $scope.UpdateTable = function(){
        $scope.button = false;
        $scope.dates[$scope.y] = $scope.name;
        $scope.name = "";

    }

    $scope.Search = function(){
        $scope.searchResult = [];
        if($scope.searchingItem){
            if($scope.dates.indexOf($scope.searchingItem) != -1){
                $scope.errorInsert = "";
                //$scope.searchResult = $scope.dates[$scope.dates.indexOf($scope.name)];
                $scope.errorSearch = "The item is in row " + ($scope.dates.indexOf($scope.searchingItem) + 1);
                $scope.searchingItem = "";
            }
            else{
                $scope.errorSearch = "There is no such item";
                $scope.searchingItem = "";
                $scope.errorInsert = "";
            }
        }
        else{
            $scope.errorSearch = "We don't have empty field";
        }

    }


    $scope.Searching = function(){
        if($scope.searchingItem){
            $scope.matchingResult = $scope.dates;
        }
        else{
            $scope.matchingResult = [];
        }
    }


    $scope.ClearSearchField = function(){
        $scope.matchingResult = [];

    }



});


