import { Component, OnInit } from '@angular/core';

import { GithubService } from './../github.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  private cards = [];
  private loading = true;

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.github
      .getCards()
      .subscribe(data =>{
        this.loading = false
        this.cards = data
      });
  }

}
