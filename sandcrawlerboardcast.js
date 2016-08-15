var app=angular.module("myApp",[]);

function Sandcrawler($scope) {
    $scope.location = "Mos Eisley North";
    $scope.recall = function() {
        $scope.$broadcast('recall', $scope.location);
    }
}
function Droid($scope) {
    $scope.location = "Owen Farm";
    $scope.$on('recall', function(e, newLocation) {
        $scope.location = newLocation;
    });
}



app.controller('Sandcrawler', Sandcrawler);
app.controller('Droid', Droid);