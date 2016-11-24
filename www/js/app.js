// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
  .state('intro', {
    url: '/',
    templateUrl: 'templates/intro.html',
    controller: 'IntroCtrl'
  })
  .state('map', {
    url: '/map',
    templateUrl: 'templates/map.html',
    controller: 'NearbyCtrl'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  });
 
  $urlRouterProvider.otherwise("/");
 
});

// //controller position
// .controller('MapCtrl', function($scope, $state, $cordovaGeolocation, $ionicLoading) {
//   var options = {timeout: 10000, enableHighAccuracy: true};
  
//     // Setup the loader
//     $ionicLoading.show({
//       content: 'Loading',
//       animation: 'fade-in',
//       showBackdrop: true,
//       maxWidth: 200,
//       showDelay: 0
//     });

//   $cordovaGeolocation.getCurrentPosition(options).then(function(position){
//     console.log($cordovaGeolocation.getCurrentPosition(options));
//     var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
//     var mapOptions = {
//       center: latLng,
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };

    
//     $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

//     $ionicLoading.hide();

//     //Wait until the map is loaded
//     google.maps.event.addListenerOnce($scope.map, 'idle', function(){
     
//       var marker = new google.maps.Marker({
//           map: $scope.map,
//           animation: google.maps.Animation.DROP,
//           position: latLng
//       });

//       var infoWindow = new google.maps.InfoWindow({
//           content: "Anda disini"
//       });
     
//       google.maps.event.addListener(marker, 'click', function () {
//           infoWindow.open($scope.map, marker);
//       });      
     
//     });

    
//   }, function(error){
//     console.log("Could not get location");
//   });

// })

// //Home Controller
// .controller('HomeCtrl', function($scope, $state) {
//   $scope.cari = function() {
//     $state.go('map');
//   }
// }) 
// //controller Nearby Search
// .controller('NearbyCtrl', function($scope, $state, $cordovaGeolocation, $ionicLoading) {
//   var options = {timeout: 10000, enableHighAccuracy: true};
  
//   // Setup the loader
//   $ionicLoading.show({
//     content: 'Loading',
//     animation: 'fade-in',
//     showBackdrop: true,
//     maxWidth: 200,
//     showDelay: 0
//   });

//   $cordovaGeolocation.getCurrentPosition(options).then(function(position){
//     console.log($cordovaGeolocation.getCurrentPosition(options));
//     var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
//     var mapOptions = {
//       center: latLng,
//       zoom: 15
//     };

//     $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

//     var infowindow = new google.maps.InfoWindow();

//     var service = new google.maps.places.PlacesService($scope.map);
//     service.nearbySearch({
//       location: latLng,
//       radius: 500,
//       types: ['mosque']
//     }, callback);

//     $ionicLoading.hide();

//     function callback(results, status) {
//       if (status === google.maps.places.PlacesServiceStatus.OK) {
//         for (var i = 0; i < results.length; i++) {
//           createMarker(results[i]);
//         }
//       }
//     }

//     function createMarker(place) {
//       var placeLoc = place.geometry.location;
//       var marker = new google.maps.Marker({
//         map: $scope.map,
//         animation: google.maps.Animation.DROP,
//         position: place.geometry.location
//       });

//       google.maps.event.addListener(marker, 'click', function() {
//         infowindow.setContent(place.name);
//         infowindow.open($scope.map, this);
//       });
//     }
    
//   }, function(error){
//     console.log("Could not get location");
//   });
// });

