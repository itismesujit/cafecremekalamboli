import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { MenudataService } from './menudata.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
  // @ViewChild('myDiv') myDiv: ElementRef;
  menuList: any = [];
  menuData: any = [];
  imgUrlParent: any = '';


  constructor(
    private _menudataService: MenudataService
  ) { }

  ngOnInit() {
    this.menuData = this._menudataService.getMenuData();
    this.menuList = this._menudataService.getMenuList();
  }

  ngAfterViewInit() {
    // console.log(this.myDiv.nativeElement.innerHTML);
  }




  subMenu: any = [];
  header: any = '';
  paragraph: any = '';

  oldElem: any = '';
  imgDir: any = '../../assets/';

  handleClick(selectedItem: any) {
    const val = this.menuData[selectedItem.id];

    this.subMenu = val.submenu;
    this.header = val.header;
    this.paragraph = val.paragraph;

    console.log(val)

    this.imgUrlParent = {
      submenu: this.subMenu,
      header: this.header,
      paragraph: this.paragraph,
      imgDir: this.menuList.filter((obj: { id: any; }) => obj.id === selectedItem.id)[0].imgDir
    }
  }
}
