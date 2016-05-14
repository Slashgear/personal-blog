export class LandingPageController {
  constructor(moment){
    'ngInject';

    this.moment = moment;
  }

  $onInit(){
    this.age = this.moment().diff("1993-01-15T12:00:00.000Z",'years');
  }
}


export let LandingPageComponent = {
  templateUrl: 'app/components/landing-page/landing-page.html',
  controller: LandingPageController
};
