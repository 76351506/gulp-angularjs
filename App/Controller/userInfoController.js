/**
 * Created by Nan on 2017/12/1.
 */
app.controller("userInfoController", function ($scope) {
    $scope.title = "用户信息一览表";
    $scope.time = new Date();
    //$scope.userinfo = renderUserInfo();
    $scope.userinfo = [{
        "userid": "1",
        "username": "志明与春娇",
        "gender": "20",
        "address": "@region",
        "cellphone": "@integer(10000000000,19999999999)",
        "email": "@email"
    }, {
        "userid": "3",
        "username": "春娇与志明",
        "gender": "25",
        "address": "@region",
        "cellphone": "@integer(10000000000,19999999999)",
        "email": "@email"
    }, {
        "userid": "2",
        "username": "春娇救志明",
        "gender": "30",
        "address": "@region",
        "cellphone": "@integer(10000000000,19999999999)",
        "email": "@email"
    }];
    $scope.search;
    $scope.activeation = function () {
        if ($scope.search == '美女') {

        }
    }
    function renderUserInfo() {
        var user = [];
        for (var i = 0; i < 5; i++) {
            user.push(Mock.mock({
                "userid": "@id",
                "username": "@name",
                "gender": "@string(1)",
                "address": "@region",
                "cellphone": "@integer(10000000000,19999999999)",
                "email": "@email"
            }));
        }
        return user;
    }
});