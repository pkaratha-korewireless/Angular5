import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProductionListComponent } from './table-list/production-list/production-list.component';
import { StorageListComponent } from './table-list/storage-list/storage-list.component';
import { RepairListComponent } from './table-list/repair-list/repair-list.component';
import { MissingListComponent } from './table-list/missing-list/missing-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'die-part-details',     component: TableListComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'list/production',        component: ProductionListComponent },
    { path: 'list/storage',        component: StorageListComponent },
    { path: 'list/repair',        component: RepairListComponent },
    { path: 'list/missing',        component: MissingListComponent },
    { path: 'login',        component: LoginComponent },
    { path: '**',               redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
