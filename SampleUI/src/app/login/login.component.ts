import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {if (localStorage.getItem('userLogin') == 'true') {
            this.router.navigateByUrl('/dashboard')
        } }

    ngOnInit() {
        // reset login status
        if (localStorage.getItem('userLogin') == 'true') {
            this.router.navigateByUrl('/dashboard')
        }
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        
        this.authenticationService.login(this.model.username, this.model.password).subscribe(
            data => {
                if(data[0]['response'] == 'success'){
                    localStorage.setItem('userLogin','true');
                    localStorage.setItem('username',this.model.username);
                    this.loading = true;
                    this.router.initialNavigation();
                    location.reload()                
                    //this.router.navigateByUrl('/dashboard');
                }
                else{
                    this.loading = false;
                }
            });
    }
}
