import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private homeService: HomeService) { }
  isCollapsed = true;
  ngOnInit() {
  }

  toggleSidebarPin() {
    this.homeService.toggleSidebarPin();
  }
  toggleSidebar() {
    console.log("h");
    this.homeService.toggleSidebar();
  }
}
