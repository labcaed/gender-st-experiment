angular.module("tutor", ["ngRoute", "ngResource", "ngAnimate", "ngMaterial", "tutor.services"]).config(function($routeProvider, $mdThemingProvider) {

    $routeProvider.
    when("/home", {
        templateUrl: "../views/home.html",
        controller: "HomeCtrl"
    }).
    when("/posttest", {
        templateUrl: "../views/posttest.html",
        controller: "PosttestCtrl"
    }).
    when("/set1", {
        templateUrl: "../views/set1.html",
        controller: "Set1Ctrl"
    }).
    otherwise({
        redirectTo: "/home"
    });


    // Neutral Theme
    $mdThemingProvider.theme("default")
        .primaryPalette("blue-grey")
        .accentPalette("blue-grey")
        .warnPalette("blue-grey");

    // ST-M 
    $mdThemingProvider.theme("stMale")
        .primaryPalette("blue")
        .accentPalette("blue")
        .warnPalette("blue");

    // ST-M 
    $mdThemingProvider.theme("stFemale")
        .primaryPalette("purple")
        .accentPalette("purple")
        .warnPalette("purple");

     $mdThemingProvider.setDefaultTheme("stFemale");
     $mdThemingProvider.alwaysWatchTheme(true);
});
