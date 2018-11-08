import { AuthToken } from './../authToken';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private tokenUrl = 'http://localhost/oauth/token/';
  private client_id = '01793440-e5b7-4a25-848d-215d7cd18a29';
  private client_secret = 'secret';
  private grant_type = 'password';

  constructor() {
  }

  async userLogin(username: string, password: string): Promise<AuthToken> {
  // TODO: get post request to work
    const httpBody = new URLSearchParams();
          httpBody.append('grant_type', this.grant_type);
          httpBody.append('client_id', this.client_id);
          httpBody.append('client_secret', this.client_secret);
          httpBody.append('username', username);
          httpBody.append('password', password);
    try {
      const res = await axios.request<AuthToken>({
        method: 'post',
        url: this.tokenUrl,
        data: httpBody
      });

      return res.data;

    } catch (err) {
      console.log(err);
    }
  }

  async refreshLogin() {
    const httpBody = new URLSearchParams()
          httpBody.append('grant_type', 'refresh_token')
          httpBody.append('client_id', this.client_id)
          httpBody.append('client_secret', this.client_secret)
          httpBody.append('refresh_token', localStorage.getItem('refresh_token'));
    try {
      const res = await axios.request({
        method: 'post',
        url: this.tokenUrl,
        data: httpBody
      });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  async logOut() {
    try {
      const httpBody = new URLSearchParams();
            httpBody.append('client_id', this.client_id);
            httpBody.append('client_secret', this.client_secret);
            httpBody.append('token', localStorage.getItem('refresh_token'));

      const res = await axios.request({
        method: 'post',
        url: 'http://localhost/oauth/revoke',
        data: httpBody
      });
      localStorage.clear();
    } catch (err) {
      console.log(err);
    }
  }
}
