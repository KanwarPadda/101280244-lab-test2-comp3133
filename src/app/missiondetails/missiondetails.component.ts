import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { APIService } from '../service_API/api.service';
import { Type } from '../models/type.model';
@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpService: APIService) {
    this.route.params.subscribe(params => {
      this.id = parseInt(params["id"]);
    });
  }

  ngOnInit(): void {
    this.httpService.sendGetRequestByID(this.id).subscribe((data: any) => {
      console.log(data);
      this.mission = data;
    });
  }
  mission!: Type;
  id: number = 1;

}
