import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
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
