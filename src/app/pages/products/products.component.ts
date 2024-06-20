import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Product } from '../../models/product.interface';
import { Category } from '../../models/category.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  categories: Category[] = [];
 
 
  constructor() {
    this.fetchData();
  }
 
  async fetchData() {
    const url = 'https://dummyjson.com/products';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();      
      const beautyProducts = data.products.filter((product: Product) => product.category === 'beauty');
      const groceries = data.products.filter((product: Product) => product.category === 'groceries');
      const electronics = data.products.filter((product: Product) => product.category === 'fragrances');
      const furniture = data.products.filter((product: Product) => product.category === 'furniture');
 
      this.categories = [
        { 
          name: 'Beauty Products', 
          products: beautyProducts 
        },
        { 
          name: 'Groceries', 
          products: groceries 
        },
        { 
          name: 'Electronics', 
          products: electronics 
        },
        { 
          name: 'Furniture', 
          products: furniture 
        }
      ];
    }
    catch{
      console.log("error")
    }
  }
 
  }
