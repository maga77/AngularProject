var app = angular.module("myApp", ["ngRoute","ngAnimate","ngStorage",'ngCookies','ngImgCrop']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "login.html",
            controller:'myLogin'
        })
        .when("/table", {
            templateUrl : "table.html",
            controller:'myTable'
        })
        .when("/modal", {
            templateUrl : "modal.html",
            controller:'myModal'
        })
        .when("/slider", {
            templateUrl : "slider.html",
            controller:'mySider'

        })
        .when("/imgcrop", {
            templateUrl : "imagecrop.html",
            controller:'myCrop'

        })
        .when("/uploadPicture", {
            templateUrl : "upload.html",
            controller:'myUpload'

        })
        .when("/accordion", {
            templateUrl : "accordion.html",
            controller:'myAccordion'

        })
        .when("/registration", {
            templateUrl : "registration.html",
            controller:'myRegistr'

        })
        .when("/profile", {
            templateUrl : "profile.html",
            controller:'myProfile'

        });
})

app.run(function($rootScope, $cookies, $location) {
    $rootScope.log_Out = function(){
           // console.log($cookies.get("user_key"));
            $cookies.remove("user_key");
            $rootScope.log_out = false;
            $location.path("/");


    }

    $rootScope.elements = angular.element(document.querySelectorAll(".clearfix"));
    $rootScope.pages_count = $rootScope.elements.children().length;



});

