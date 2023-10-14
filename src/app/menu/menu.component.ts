import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { MenudataService } from './menudata.service';
import {KeyValue} from '@angular/common';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu:  { [key: string]: any[] } = {};
  menuList: any = [];
  menuData: any = [];
  imgUrlParent: any = 'default value';



  constructor(
    private _menudataService: MenudataService
  ) { }

  ngOnInit() {
    this.menu = this._menudataService.getMenu();
  }





}
