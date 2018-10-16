  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {HttpClientModule} from '@angular/common/http' ;
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { IncioComponent } from './incio/incio.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { InisiarSesionComponent } from './inisiar-sesion/inisiar-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { MostrarArticuloComponent } from './mostrar-articulo/mostrar-articulo.component';

import {ArticulosService} from './articulos.service';
import {UsuarioService} from './usuario.service' ;


const rutas:Routes=[
{path: '', component: IncioComponent, pathMatch: 'full' },
{path:'inicio', component: IncioComponent},
{path: 'articulos', component: ArticulosComponent},
{path: 'iniciar_sesion', component: InisiarSesionComponent},
{path: '**', redirectTo: '/', pathMatch: 'full'}
];
  

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    IncioComponent,
    ArticulosComponent,
    CrearArticuloComponent,
    InisiarSesionComponent,
    CrearCuentaComponent,
    MostrarArticuloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    FormsModule
   ]
  providers: [
  ArticulosService,
  UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
