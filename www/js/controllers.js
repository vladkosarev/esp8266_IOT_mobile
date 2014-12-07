angular.module('starter.controllers', [])

    .controller('InfoCtrl', function ($scope, $http) {
        $scope.ip = "192.168.4.1";
        $scope.getInfo = function () {
            var ip = $scope.ip;
            $http.get('http://' + ip + '/config?command=wifi').
                success(function (data) {
                    $scope.wifi = data;
                }).error(function (data) {
                    $scope.wifi = data;
                });
            $http.get('http://' + ip + '/client?command=info').
                success(function (data) {
                    $scope.info = data;
                }).error(function (data) {
                    $scope.info = data;
                });
            $http.get('http://' + ip + '/client?command=status').
                success(function (data) {
                    $scope.status = data;
                }).error(function (data) {
                    $scope.status = data;
                });
            $http.get('http://' + ip + '/client?command=scan').
                success(function (data) {
                    $scope.scan = data;
                }).error(function (data) {
                    $scope.scan = data;
                });
        };
    })

    .controller('SetupCtrl', function ($scope, $http) {
        $scope.request = {};
        $scope.request.ip = "192.168.4.1";
        $scope.request.token = "";
        $scope.post = function (request) {
            var requestToSend =
            {
                "Request": {
                    "Station": {
                        "Connect_Station": {
                            "ssid": "",
                            "password": "",
                            "token": ""
                        }
                    }
                }
            };
            requestToSend.Request.Station.Connect_Station.ssid = request.ssid;
            requestToSend.Request.Station.Connect_Station.password = request.password;
            requestToSend.Request.Station.Connect_Station.token = request.token;
            $http.post('http://192.168.4.1/config?command=wifi', requestToSend).
                success(function (data, status, headers, config) {
                }).error(function (data, status, headers, config) {
                });
        };
    });
