import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import {Teste} from './teste';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends Teste implements OnInit{

  user$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    super();
    console.log(this.link)
    this.route.params.subscribe(params => this.user$ = params.id)
  }

  ngOnInit() {
    this.data.getUsers(this.user$).forEach(item => console.log(item));
  }

}
