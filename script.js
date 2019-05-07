// création de variable
var carApp = angular.module('carApp', []);
// les pages sont appelées avec $
carApp.controller('carCtrl', function ($http, $scope) {
        // On récupếre le fichier voiture.json
        $http.get('voiture1.json').then(function (reponse) {
                    $scope.marques = reponse.data;
                });
});
