import { Component } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.css'
})
export class RecommendedProductsComponent {
  productArr:Product[]=[
    {pName:'lenovo',pPrices:60000,pCat:'Laptop',pImg:"assets/img/lenovo.webp"},
    {pName:'Dell',pPrices:20000,pCat:'Laptop',pImg:"assets/img/dell.webp"},
    {pName:'Azus',pPrices:30000,pCat:'Laptop',pImg:"assets/img/azus.webp"},
    {pName:'hp',pPrices:25000,pCat:'Laptop',pImg:"assets/img/hp.webp"},

    {pName:'Dell',pPrices:20000,pCat:'Laptop',pImg:"assets/img/dell.webp"},
    {pName:'Azus',pPrices:30000,pCat:'Laptop',pImg:"assets/img/azus.webp"},
    {pName:'lenovo',pPrices:60000,pCat:'Laptop',pImg:"assets/img/lenovo.webp"},
    {pName:'hp',pPrices:25000,pCat:'Laptop',pImg:"assets/img/hp.webp"},
  ]
}
