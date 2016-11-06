import angular from 'angular';

import MainController from './app.controller';
import PaymentService from './payment.service';


import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

angular.module('app', [])
    .controller({MainController})
    .service({PaymentService})
    .run(() => {
  console.log('angular run');
})
