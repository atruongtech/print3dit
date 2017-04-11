import { Injectable } from '@angular/core';

// need to declare require to avoid compilation error. 
// definitely a node function though.
declare var require: any
var request = require("request");

@Injectable()
export class UserManagementService {

  bearer: any;
  response: any;

  constructor() {
    this.bearer = null;
    this.response = null;
   }

  private getBearer(): void {
    let options: any = { method: 'POST',
            url: 'https://print3dstats.auth0.com/oauth/token',
            headers: { 'content-type': 'application/json' },
            body: 
            { grant_type: 'client_credentials',
              client_id: 'aDTjqKoK5fKquOlKEmpZPTe3LbfvMeg3',
              client_secret: 'cep02-Q1WejFq9BJ0Q4rIx_5iTtyDyktkWRZeBdO1RCuQr-WYn5v8PBLfU9f5uzj',
              audience: 'https://print3dstats.auth0.com/api/v2/' },
            json: true };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        this.response = response;
        this.bearer = this.response.access_token;
      }
    );

  }

  public setAppUserId(userId: string): void {
    if (!this.bearer) {
      this.getBearer();
    }
    
  }
}   
