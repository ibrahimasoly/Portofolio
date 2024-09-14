import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isNavOpen=false
  ngOnInit(): void {
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  

}
