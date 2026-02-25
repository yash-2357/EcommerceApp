import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../services/product';
import { OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { Modal } from "../modal/modal";
import { Highlight } from "../../directives/highlight";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Modal, Highlight],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard implements OnInit {
  products: string[] = [];
  selectedChair = {
    name:'Gaming Chair',
    price: 8000
  }
  isModalOpen: boolean = false;

  constructor(private productService: Product, private authService: Auth, private router: Router) { }

  ngOnInit() {
    this.loadProducts();
  }

 loadProducts() {
    this.productService.getProducts().subscribe((products: any) => {
      this.products = products;
    });
  }

  logout(){
    localStorage.removeItem('token');
     this.router.navigate(['/login']);
  }

  openModal() {
    this.isModalOpen = true;
  }

  close() {
    this.isModalOpen = false;
  }

  openEmail() {
   this.router.navigate(['/email']);
  }
}
