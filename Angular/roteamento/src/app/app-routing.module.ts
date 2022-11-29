import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageWithParamsComponent } from './page-with-params/page-with-params.component';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
import { SecondPageComponent } from './second-page/second-page.component';


const routes: Routes = [
  { path: "first-page", component: FirstPageComponent },
  { path: "second-page", component: SecondPageComponent },
  /* redirecionamento quando a página não tiver nenhum endereço o full é para garantir que somente será redirecionado quando o path estiver vazio */
  { path: "", redirectTo: "first-page", pathMatch: "full" },
  {path: "page-with-params/:id", component: PageWithParamsComponent},
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  /* canActivate - Para configurar que essa página somente será acessada mediante uma ativação */
  {path: "protected-page", component: ProtectedPageComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
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
