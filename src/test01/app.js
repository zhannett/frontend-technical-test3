export const test01 = {
  template: require('./app.html'),
  
  
  controller($http) {
    const $ctrl = this;
    $ctrl.en = true;
    $ctrl.fr = false;
    $http.get('http://localhost:3000/test01/data.json')
      .then(
        function(response) {
          $ctrl.data = response;
        },
        function (response) {
          $ctrl.message = "Error: " + response.status + " " + response.statusText;
        }
      );
  
  
    $ctrl.changeLanguage = function (key) {
      if (key === 'en') {
        $ctrl.en = true;
        $ctrl.fr = false;
      }
      if (key === 'fr') {
        $ctrl.en = false;
        $ctrl.fr = true;
      }
      $http.get('http://localhost:3000/test01/data_' + key + '.json')
        .then(
          function(response) {
            $ctrl.data = response;
          },
          function (response) {
            $ctrl.message = "Error: " + response.status + " " + response.statusText;
          }
        );
    };
  
  }
};
