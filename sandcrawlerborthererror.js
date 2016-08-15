var app=angular.module("myApp",[]);

function Sandcrawler($scope) {
    $scope.$on('requestDroidRecall', function(e) {
        $scope.$broadcast('executeDroidRecall');
    });
}
function Droid($scope) {
    $scope.location = "Owen Farm";
    $scope.recallAllDroids = function() {
        $scope.$emit('requestDroidRecall');
    }
    $scope.$on('executeDroidRecall', function() {
        $scope.location = "Sandcrawler"
    });
}

app.controller('Sandcrawler', Sandcrawler);
app.controller('Droid', Droid);