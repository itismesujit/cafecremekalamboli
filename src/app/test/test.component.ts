import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  toggles:any =  false;
  onOff(){
    this.toggles = !this.toggles;
  }
  info(e:any){
    console.log(e);
  }
}
