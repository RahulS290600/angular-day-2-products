import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() product: Product = {
    id: 0,
    title: " ",
    description: "",
    thumbnail:" "
  };
}
