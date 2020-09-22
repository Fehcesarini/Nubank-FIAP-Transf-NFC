import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'NFC_Send',
    loadChildren: () => import('./NFC_Send/NFC_Send.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'NFC_Select',
    loadChildren: () => import('./NFC_Select/NFC_Select.module').then( m => m.HomePageModule)
  },  
  {
    path: '',
    redirectTo: 'NFC_Send',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
