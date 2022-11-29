import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondPageComponent } from './second-page/second-page.component';


const routes: Routes = [
  { path: "first-page", component: FirstPageComponent },
  { path: "second-page", component: SecondPageComponent },
  /* redirecionamento quando a página não tiver nenhum endereço o full é para garantir que somente será redirecionado quando o path estiver vazio */
  { path: "", redirectTo: "first-page", pathMatch: "full" },
  /* dois asteriscos serve para quando há uma URL desconhecida, não configurada no sistema, */
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
