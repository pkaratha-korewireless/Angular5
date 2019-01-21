import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule  } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { ProductionListComponent } from './table-list/production-list/production-list.component';
import { ProductionElementComponent } from './table-list/production-list/production-element/production-element.component';

import { StorageListComponent } from './table-list/storage-list/storage-list.component';
import { StorageElementComponent } from './table-list/storage-list/storage-element/storage-element.component';

import { RepairListComponent } from './table-list/repair-list/repair-list.component';
import { RepairElementComponent } from './table-list/repair-list/repair-element/repair-element.component';

import { MissingListComponent } from './table-list/missing-list/missing-list.component';
import { MissingElementComponent } from './table-list/missing-list/missing-element/missing-element.component';
import { DieDetailsComponent } from './die-details/die-details.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AgmCoreModule } from '@agm/core';
import { GoogleAPIService } from './services/google-map.services'
import {ApiServices} from './services/api.services'
import {FilterUtils} from './lib/FilterUtils'
import { ChartModule } from 'angular-highcharts';
import {LoginComponent} from './login/login.component'
import {AuthenticationService,AlertService} from './services/index'
import { DatePipe } from '@angular/common'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CircularProgressComponent} from './circular-progress/circular-progress.component'
import { MapsComponent } from './maps/maps.component'
import { UnassignedListComponent } from './table-list/unassigned-list/unassigned-list.component';
import { UnassignedElementComponent } from './table-list/unassigned-list/unassigned-element/unassigned-element.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    DieDetailsComponent,
    NotificationsComponent,
    ProductionListComponent,
    ProductionElementComponent,
    StorageListComponent,
    StorageElementComponent,
    MissingListComponent,
    MissingElementComponent,
    RepairListComponent,
    RepairElementComponent,
    LoginComponent,
    CircularProgressComponent,
    MapsComponent,
    UnassignedListComponent,
    UnassignedElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    JsonpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [GoogleAPIService,ApiServices,FilterUtils,{provide: LocationStrategy, useClass: HashLocationStrategy},AuthenticationService,AlertService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
