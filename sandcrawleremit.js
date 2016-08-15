var app=angular.module("myApp",[]);

function Sandcrawler($scope) {
    $scope.location = "Mos Eisley North";
    $scope.$on('summon', function(e, newLocation) {
        $scope.location = newLocation;
    });
}
function Droid($scope) {
    $scope.location = "Owen Farm";
    $scope.summon = function() {
        $scope.$emit('summon', $scope.location);
    }
}


app.controller('Sandcrawler', Sandcrawler);
app.controller('Droid', Droid);