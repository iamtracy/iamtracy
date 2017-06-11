import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/rx';


@Injectable()
export class GithubService {

  

  githubAPI = 'https://api.github.com/users/iamtracy/repos?access_token=' + this.apiToken;
  cards = <any>[];

  constructor(private http: Http) { }

  getCards() {
    return  this.http
              .get(this.githubAPI)
              .map((response: Response) => {
                const data = response.json();
                return this.cards = data;
              })
  }

  getJSCards() {
    return  this.cards.filter(item => item.language == 'JavaScript');
  }

}
