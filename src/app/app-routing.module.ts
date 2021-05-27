import { LoginGuard } from './components/guards/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/auth/login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { LocalizacionesComponent } from './components/localizaciones/localizaciones.component';
import { NuevoTemaComponent } from './components/nuevo-tema/nuevo-tema.component';
import { ForoComponent } from './components/foro/foro.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  // Ruta principal del index
  { path: '', component: MenuComponent },
  // Ruta del login
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  // Ruta del registro de usuarios
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  // Rutas del navbar
  { path: 'localizaciones', component: LocalizacionesComponent},
  { path: 'alojamientos', component: AlojamientosComponent},
  { path: 'rutas', component: RutasComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'foro', component: ForoComponent},
  { path: 'nuevo-post', component: NuevoTemaComponent},
  { path: 'tema/:id_tema', component: ComentariosComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
