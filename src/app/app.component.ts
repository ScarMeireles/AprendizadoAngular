import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-root',
  imports:  [
    RouterModule,
    MatSidenavModule,
    MatToolbarModule, 
    MatIconModule,  
    MatListModule 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularProj';
}
