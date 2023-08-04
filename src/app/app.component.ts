import { Component } from '@angular/core';
import productData from './products.json'; 
import categorieData from './categories.json'; 
import { HttpClient } from '@angular/common/http';

interface Product {  
  id: Number;  
  name: String;  
  Price: String;  
  categoryId: String;  
}  

interface Categorie {  
  id: Number;  
  name: String;   
}  
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'avangrid-json';

  products: Product[] = productData;
  categories: Categorie[] = categorieData;
}
