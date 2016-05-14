/* global moment:false */
import { config } from './index.config';
import { routerConfig } from './index.route';
import { LandingPageComponent } from '../app/components/landing-page/landing-page.component';

angular.module('slashgearGithubIo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'toastr'])
  .config(config)
  .config(routerConfig)
  .constant('moment', moment)
  .component('landingPage',LandingPageComponent)
