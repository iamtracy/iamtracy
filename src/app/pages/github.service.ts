import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/rx';


@Injectable()
export class GithubService {

  apiToken = '2160ec8382b78689408c65f3904daaff1daf2a46';

  githubAPI = 'https://api.github.com/users/iamtracy/repos?access_token=' + this.apiToken;
  cards = <any>[];

  constructor(private http: Http) { }

  getCards() {
    return this.http
            .get(this.githubAPI)
              .map((response: Response) => {
                const data = response.json();
                return this.cards = data;
              })
  }

}
