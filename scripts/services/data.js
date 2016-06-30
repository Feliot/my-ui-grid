angular
  .module('app')
  .service('data', function ($http) {
    function extraerData (data){
      return data.data;
    }

    this.data = function () {
      return $http.get('./data/datosUiGridEjercicio.json').then(extraerData);
    }

    this.sexo = function () {
      return $http.get('./data/sexo.json').then(extraerData);
    }
    this.cabello = function () {
      return $http.get('./data/cabello.json').then(extraerData);
    }
  })
