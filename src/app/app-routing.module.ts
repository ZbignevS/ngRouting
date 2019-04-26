import { TemplatesComponent } from './templates/templates.component';
import { ProductsComponent } from './products/products.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // routingo importas

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'pricing', component: PricingComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'templates', component: TemplatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
