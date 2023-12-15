import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class Feature1IndexComponent implements OnInit {
  ngOnInit(): void {
    console.log("ad");
  }

}
