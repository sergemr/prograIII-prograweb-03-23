import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class INDEXComponent {
  constructor(private router: Router) {
  }

  goToIndex() {
    this.router.navigate(['/', 'index']);
  }
  goToAboutUs() {
    this.router.navigate(['/', 'aboutUs']);
  }
  goToProducts() {
    this.router.navigate(['/', 'products']);
  }

}
