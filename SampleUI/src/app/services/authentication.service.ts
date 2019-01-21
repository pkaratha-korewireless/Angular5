import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import {AppConfig} from '../config/app.config'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        let url = AppConfig.endpoints['atollEndpoint']+ 'opcode=ATOP001&commcode=ATCC001&username='+username+'&password='+password;
        let userlogin;
        return this.http.get(url);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('userLogin');
    }
}