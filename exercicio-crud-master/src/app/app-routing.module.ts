import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    this.logaRotas('/', router.config);
  }

  logaRotas(pai: String, rotas: Routes) {
    for (let i = 0; i < rotas.length; i++) {
      if (rotas[i].children) {
        this.logaRotas(rotas[i].path + '/', rotas[i].children);
      }
    }

  }


}
