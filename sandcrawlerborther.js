var app=angular.module("myApp",[]);

function Sandcrawler($scope) {
    $scope.$on('requestDroidRecall', function(e,newLocation) {//监听事件
        $scope.$broadcast('executeDroidRecall', newLocation);//广播
    });
}
function DroidRD($scope) {
    $scope.location = "Owen Farm DroidRD";
    $scope.executeDroidRecall = function() {
        $scope.$emit('requestDroidRecall',$scope.location);
    }

    $scope.$on('executeDroidRecall', function(e, newLocation) {
        $scope.location = newLocation+" RD";
    });
}

function DroidCP($scope) {
    $scope.location = "Owen Farm DroidCP";
    $scope.executeDroidRecall = function() {
        $scope.$emit('requestDroidRecall',$scope.location);
    }

    $scope.$on('executeDroidRecall', function(e, newLocation) {
        $scope.location = newLocation+" CP";
    });
}

app.controller('Sandcrawler', Sandcrawler);
app.controller('DroidRD', DroidRD);
app.controller('DroidCP', DroidCP);