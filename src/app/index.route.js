export function routerConfig ($stateProvider, $urlRouterProvider,$locationProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      templateUrl: './app/components/home/home.html'
    })
    .state('home.landingpage',{
      url:'/',
      template: `<landing-page></landing-page>`
    })
    .state('home.curriculum',{
      url:'/curriculum',
      templateUrl:'./app/components/curriculum/curriculum.html'
    })
    .state('home.projects',{
      url:'/projects',
      templateUrl:'./app/components/projects/projects.html'
    })
    .state('home.contact',{
      url:'/contact',
      template:'Work in porgress...'
    })
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
