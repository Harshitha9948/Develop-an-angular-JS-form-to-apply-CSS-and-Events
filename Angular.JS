<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AngularJS Form with CSS and Events</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <style>
    body 
    {
      font-family: 
      Arial, sans-serif;
      margin: 200px;
    }

    .form-container 
    {
      width: 300px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }

    input.ng-dirty.ng-invalid {
      border: 2px solid red;
    }

    .success 
    {
      color: green;
      font-weight: bold;
    }
  </style>
</head>
<body ng-controller="FormController">
  <div class="form-container">
    <h2>Registration Form</h2>
    <form name="userForm">
      <label>Name:</label><br>
      <input type="text" name="name" ng-model="user.name" required><br><br>

      <label>Email:</label><br>
      <input type="email" name="email" ng-model="user.email" required><br><br>

      <button type="submit" ng-click="submitForm()">Submit</button>
    </form>
    <div class="success" ng-show="submitted">Form submitted successfully!</div>
  </div>

  <script>
    var app = angular.module("myApp", []);

    app.controller("FormController", function ($scope) {
      $scope.submitted = false;

      $scope.submitForm = function () {
        if ($scope.userForm.$valid) {
          $scope.submitted = true;
        } else {
          alert("Please fill all required fields correctly!");
        }
      };
    });
  </script>
</body>
</html>