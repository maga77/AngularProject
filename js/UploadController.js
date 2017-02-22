app.controller("myUpload",function ($scope) {
        $scope.Images = [];

        $scope.imageUpload = function(element){
            var reader = new FileReader();
            reader.onload = $scope.imageIsLoaded;
            reader.readAsDataURL(element.files[0]);
        }

        $scope.imageIsLoaded = function(e){
            $scope.$apply(function() {
                $scope.Images.push(e.target.result);
            });
        }

})
