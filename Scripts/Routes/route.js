/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("mainModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        "$httpProvider",
        function ($routeProvider, $locationProvider, $httpProvider) {
            $locationProvider.html5Mode(true);
            //$httpProvider.defaults.headers.common = {};
            //$httpProvider.defaults.headers.post = {};
            //$httpProvider.defaults.headers.put = {};
            //$httpProvider.defaults.headers.patch = {};
            //$httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
            $routeProvider

                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                });
        }
    ]);