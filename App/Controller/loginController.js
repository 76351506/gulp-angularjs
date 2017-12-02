/**
 * Created by Nan on 2017/12/1.
 */
app.controller("loginController", function ($scope) {
    $scope.title = "北京八维研修学院";
    $scope.flag = false;
    $scope.readme = false;
    $scope.userinfo = {
        username: "haonan",
        password: "123456",
        address: "山西省偏关县",
        phonenumber: "13031061118",
        hoby: ["吃饭", "睡觉", "打豆豆"]
    };
    $scope.suggestion = [
        {
            name: "多吃饭",
            checked: false
        },
        {
            name: "多喝水",
            checked: false
        },
        {
            name: "多吃肉",
            checked: false
        }
    ];
    $scope.checkall = function () {
        var arr = [];
        $scope.suggestion.forEach(function (item) {
            if (item.checked == true) {
                arr.push(item)
            }
        })
        if (arr.length == $scope.suggestion.length) {
            $scope.flag = true;
        }else{
            $scope.flag = false;
        }
    }
    $scope.getuser = function () {
        console.log($scope.userinfo.username);
        console.log($scope.userinfo.password);
    }
});
