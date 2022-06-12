import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductTypeComponent } from './components/add-product-type/add-product-type.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'index.html', pathMatch: 'full' },
  {path :'index.html', component:ProductListComponent},
  {path :'update-product/:id', component:UpdateProductComponent},
  {path :'add-product' , component:AddProductComponent},
  
  {path : 'add-productType', component:AddProductTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
