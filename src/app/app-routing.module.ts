import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';

// const routes: Routes = [
//   {
//     path: 'home',
//     component: HomeComponent,
//   },
//   { path: 'login', component: LoginComponent },
//   { path: 'gallery', component: GalleryComponent },
//   {
//     path: 'settings',
//     loadChildren: () =>
//       import('./pages/settings/settings.module').then(
//         (module) => module.SettingsModule
//       ),
//   },
//   { path: 'about-us', component: AboutUsComponent },
//   // {
//   //   path: 'a',
//   //   component: LoginComponent,
//   // },
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: '**', redirectTo: 'login', pathMatch: 'full' },
// ];

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((module) => module.LoginModule),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./pages/gallery/gallery.module').then(
        (module) => module.GalleryModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then(
        (module) => module.SettingsModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then(
        (module) => module.AboutUsModule
      ),
  },
  // {
  //   path: 'a',
  //   component: LoginComponent,
  // },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
