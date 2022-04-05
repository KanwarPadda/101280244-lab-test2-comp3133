import { Component, OnInit } from '@angular/core';
import { APIService } from '../service_API/api.service';
import { HttpClient } from '@angular/common/http';
import { Type } from '../models/type.model';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions: Type[];

  constructor(private httpService: APIService) {
    this.missions = []
   }

  ngOnInit(): void {
    this.httpService.sendGetRequest()
      .subscribe((res: any) => {
        console.log(res);
        this.missions = res;
    })
  }
}
