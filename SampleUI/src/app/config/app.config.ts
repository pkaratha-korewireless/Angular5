import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  endpoints: {
    atollEndpoint: 'http://www.atollkinesis.com/atollkinesis/ak_uiservice.php?',
    serverIp: 'http://www.atollkinesis.com/'
  }
};
