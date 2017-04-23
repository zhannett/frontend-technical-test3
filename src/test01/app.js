export const test01 = {
  template: require('./app.html'),
  controller($http) {
    const $ctrl = this;
    $http.get('http://localhost:3000/test01/data.json')
      .then(
        function(response) {
          $ctrl.data = response;
        },
        function (response) {
          $ctrl.message = "Error: " + response.status + " " + response.statusText;
        }
      );
  }
};
