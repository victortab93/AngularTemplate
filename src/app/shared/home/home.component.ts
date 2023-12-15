import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'template';

  constructor(private homeService: HomeService) {}
  getClasses() {
    const classes = {
      'pinned-sidebar': this.homeService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.homeService.getSidebarStat().isSidebarToggeled
    }
    return classes;
  }
  toggleSidebar() {
    this.homeService.toggleSidebar();
  }
}