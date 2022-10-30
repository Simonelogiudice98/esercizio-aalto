import { Component, Input, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {



  }



}
