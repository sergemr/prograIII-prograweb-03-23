import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOMEComponent } from './home/home.component';
import { FormularioComponent} from './formulario/formulario.component';
import { INDEXComponent } from './index/index.component';

const routes: Routes = [   { path: 'index', component: INDEXComponent },
{ path: 'home', component: HOMEComponent},
{ path: 'formulario', component: FormularioComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
