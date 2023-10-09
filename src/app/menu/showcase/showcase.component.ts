import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '.app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  @Input() imgUrlChild:any;
  imgDir: any = '../../assets/1.jpg'

  menuData:any = [];
  header: any = '';
  paragraph: any = '';

  ngOnInit(){
    this.imgDir = this.imgUrlChild.imgDir;
  }

}
