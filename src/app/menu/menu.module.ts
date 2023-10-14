import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SubmenuComponent } from './submenu/submenu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule} from '@angular/router';
import { MenudataService } from './menudata.service';
import { MenuRoutingModule } from './menu-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    MenuComponent,
    ShowcaseComponent,
    SubmenuComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuRoutingModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [MenudataService]
})
export class MenuModule { 
  
}
