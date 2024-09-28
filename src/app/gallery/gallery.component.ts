import { Component } from '@angular/core';
import { Product } from '../interface/product';
import { RecommendedProductsComponent } from '../recommended-products/recommended-products.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendedProductsComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
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
