import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  juices: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getJuice().subscribe(data =>{
      this.juices = data;
      console.log(this.juices);
    })
  }

}
